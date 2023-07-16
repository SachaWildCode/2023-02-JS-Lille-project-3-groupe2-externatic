const AbstractManager = require("./AbstractManager");

class CandidateManager extends AbstractManager {
  constructor() {
    super({ table: "candidate" });
  }

  // find all candidate

  findAll() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }

  // find a canidate by id

  find(id) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE id = ?`, [
      id,
    ]);
  }

  findCandidateByAccountId(id) {
    return this.database.query(`SELECT * FROM candidate where auth_ID = ?`, [
      id,
    ]);
  }
  // update candidate information

  async update(candidateId, updatedData) {
    try {
      await this.database.beginTransaction();

      const updateCandidateQuery = `
        UPDATE candidates
        SET lastname = ?, firstname = ?, birthdate = ?, phoneNumber = ?
        WHERE ID = ?`;

      const updateAddressQuery = `
        UPDATE address
        SET street_number = ?, street_type = ?, street_name = ?, city = ?, postal_code = ?, department = ?, region = ?, country = ?
        WHERE candidate_ID = ?`;

      const candidateParams = [
        updatedData.lastname,
        updatedData.firstname,
        updatedData.birthdate,
        updatedData.phoneNumber,
        candidateId,
      ];

      const addressParams = [
        updatedData.street_number,
        updatedData.street_type,
        updatedData.street_name,
        updatedData.city,
        updatedData.postal_code,
        updatedData.department,
        updatedData.region,
        updatedData.country,
        candidateId,
      ];

      await this.database.query(updateCandidateQuery, candidateParams);
      await this.database.query(updateAddressQuery, addressParams);

      await this.database.commit();
    } catch (error) {
      await this.database.rollback();
      throw error;
    }
  }

  // get all bookmarks for a candidate

  async getBookmarks(candidateId) {
    try {
      const query = `
      SELECT o.ID, o.title, o.descriptions, o.offer_date
      FROM externatic.offer o
      INNER JOIN externatic.bookmarks b ON o.ID = b.offer_ID
      WHERE b.candidate_ID = ? `;

      const results = await this.database.query(query, [candidateId]);
      return results;
    } catch (error) {
      await this.database.rollback();
      throw error;
    }
  }

  async add(candidate) {
    const query1 =
      "INSERT INTO auth (register_email, password, account_type) VALUES ( ?, ?, ?)";
    const query2 =
      "INSERT INTO candidate (auth_ID, lastname, firstname, birthdate, phone_number, about, picture_url) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const query3 =
      "INSERT INTO address (street_number, street_type, street_name, city, postal_code, department, region, country, candidate_ID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    try {
      const [result1] = await this.database.query(query1, [
        candidate.registerEmail,
        candidate.hashedPassword,
        candidate.accountType,
      ]);

      const authID = result1.insertId;

      const [result2] = await this.database.query(query2, [
        authID,
        candidate.lastname,
        candidate.firstname,
        candidate.birthdate,
        candidate.phoneNumber,
        candidate.about,
        candidate.pictureUrl,
      ]);
      const candidateID = result2.insertId;

      const [result3] = await this.database.query(query3, [
        candidate.streetNumber,
        candidate.streetType,
        candidate.streetName,
        candidate.city,
        candidate.postalCode,
        candidate.department,
        candidate.region,
        candidate.country,
        candidateID,
      ]);
      return [result3];
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  // delete a candidate

  delete(id) {
    return this.database.query(
      `
      DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
  }
}

module.exports = CandidateManager;
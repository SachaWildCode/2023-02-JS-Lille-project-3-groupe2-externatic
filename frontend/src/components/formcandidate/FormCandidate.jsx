import React, { useEffect, useState } from "react";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import axios from "axios";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
// import "primeicons/primeicons.css";
import "./FormCandidate.scss";

export default function FormCandidate() {
  const [activeStep, setActiveStep] = useState(0);

  const [registerFormData, setRegisterFormData] = useState({
    registerEmail: "",
    password: "",
    confirmPassword: "",
    accountType: "candidat",
    authID: 15,
    lastname: "",
    firstname: "",
    birthdate: "",
    phoneNumber: "0606060606",
    about: "",
    pictureUrl: "",
    streetNumber: "",
    streetType: "",
    streetName: "",
    city: "",
    postalCode: "",
    department: "",
    region: "",
    country: "",
    candidateID: 7,
  });

  // Password match check onBlur

  const [passwordMatch, setPasswordMatch] = useState();

  useEffect(() => {
    if (registerFormData.confirmPassword.length === 0) {
      setPasswordMatch();
    } else {
      const { password, confirmPassword } = registerFormData;
      setPasswordMatch(password === confirmPassword);
    }
  }, [registerFormData.confirmPassword]);

  const handleChangeData = (event) => {
    setRegisterFormData((previousData) => ({
      ...previousData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormSubmit = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/register`, registerFormData)
      .then(() => {})
      .catch((err) => {
        console.error(err);
      });
  };

  const steps = [
    {
      // Envoyer dans la table AUTH
      label: "Etape 1/5",
      content: (
        <div className="mail-password-container">
          <h1>Choisissez vos identifiants</h1>
          <div className="all-first-input">
            <div className="mail-input">
              <label htmlFor="email">Email :</label>
              <input
                type="email"
                id="email"
                name="registerEmail"
                value={registerFormData.registerEmail}
                onChange={handleChangeData}
                placeholder="johndoe@exemple.com"
              />
            </div>
            <div className="password-input">
              <label htmlFor="password">Mot de passe :</label>
              <input
                type="password"
                id="password"
                name="password"
                value={registerFormData.password}
                onChange={handleChangeData}
                placeholder="Insérer votre mot de passe ..."
              />
            </div>
            <div className="confirm-password-input">
              <label htmlFor="confirmpassword">
                Confirmer le mot de passe :
              </label>
              <input
                type="password"
                id="confirmpassword"
                name="confirmPassword"
                value={registerFormData.confirmPassword}
                onChange={handleChangeData}
                placeholder="Confirmer votre mot de passe ..."
              />
            </div>
            {passwordMatch === false && (
              <div style={{ color: "red" }}>
                Les mots de passe ne correspondent pas.
              </div>
            )}
            {passwordMatch && passwordMatch === true && (
              <div style={{ color: "green" }}>
                Les mots de passe sont identiques.
              </div>
            )}
          </div>
        </div>
      ),
    },
    {
      // Envoyer dans la table CANDIDATE
      label: "Etape 2/5",
      content: (
        <div className="name-birthday-container">
          <h1>Dites-nous en plus à propos de vous !</h1>
          <div className="all-second-input">
            <div className="firstname-input">
              <label htmlFor="firstname"> Prénom :</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={registerFormData.firstname}
                onChange={handleChangeData}
                placeholder="John ..."
              />
            </div>
            <div className="lastname-input">
              <label htmlFor="lastname">Nom :</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={registerFormData.lastname}
                onChange={handleChangeData}
                placeholder="Doe ..."
              />
            </div>

            <div className="birthday-input">
              <label htmlFor="birthdate">Date de naissance :</label>
              <input
                type="date"
                id="birthdate"
                name="birthdate"
                value={registerFormData.birthdate}
                onChange={handleChangeData}
                min="1900-01-01"
                max="2005-07-27"
                pattern="\d{4}-\d{2}-\d{2}"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      // Envoyer dans la table ADDRESS
      label: "Etape 3/5",
      content: (
        <div className="address-container">
          <h1>N'oubliez pas votre adresse postale</h1>
          <div className="all-third-input">
            <div className="container-right">
              <div className="number-way-input">
                <label htmlFor="numberway">N° de voirie :</label>
                <input
                  type="number"
                  id="numberway"
                  name="streetNumber"
                  value={registerFormData.streetNumber}
                  onChange={handleChangeData}
                  placeholder="32"
                />
              </div>
              <div className="type-way-input">
                <label htmlFor="typeway">Type de voirie :</label>
                <input
                  type="text"
                  id="typeway"
                  name="streetType"
                  value={registerFormData.streetType}
                  onChange={handleChangeData}
                  placeholder="Rue, Boulevard ..."
                />
              </div>
              <div className="name-way-input">
                <label htmlFor="nameway">Nom de la voirie :</label>
                <input
                  type="text"
                  id="nameway"
                  name="streetName"
                  value={registerFormData.streetName}
                  onChange={handleChangeData}
                  placeholder="Henry de la Mouette ..."
                />
              </div>
              <div className="country-input">
                <label htmlFor="country">Pays :</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={registerFormData.country}
                  onChange={handleChangeData}
                  placeholder="France ..."
                />
              </div>
            </div>
            <div className="container-left">
              <div className="region-input">
                <label htmlFor="region">Région :</label>
                <input
                  type="text"
                  id="region"
                  name="region"
                  value={registerFormData.region}
                  onChange={handleChangeData}
                  placeholder="Île de France ..."
                />
              </div>
              <div className="department-input">
                <label htmlFor="department">Département :</label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  value={registerFormData.department}
                  onChange={handleChangeData}
                  placeholder="Val-de-Marne ..."
                />
              </div>
              <div className="city-input">
                <label htmlFor="city">Ville :</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={registerFormData.city}
                  onChange={handleChangeData}
                  placeholder="Paris ..."
                />
              </div>
              <div className="postal-code-input">
                <label htmlFor="postalcode">Code postal :</label>
                <input
                  type="number"
                  id="postalcode"
                  name="postalCode"
                  value={registerFormData.postalCode}
                  onChange={handleChangeData}
                  placeholder="94220 ..."
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      // Envoyer dans la table CONTRACT
      label: "Etape 4/5",
      content: (
        <div className="contract-check-container">
          <h1>Que recherchez-vous sur notre plateforme ?</h1>
          <div className="all-fourth-input">
            <div className="container-left1">
              <div className="cdi-input">
                <input id="cdi" type="checkbox" value="contract" />
                <label htmlFor="cdi">CDI</label>
              </div>
              <div className="cdd-input">
                <input id="cdd" type="checkbox" value="contract" />
                <label htmlFor="cdd">CDD</label>
              </div>
              <div className="interim-input">
                <input id="interim" type="checkbox" value="contract" />
                <label htmlFor="interim">INTERIM</label>
              </div>
            </div>
            <div className="container-right1">
              <div className="alternance-input">
                <input id="alternance" type="checkbox" value="contract" />
                <label htmlFor="alternance">ALTERNANCE</label>
              </div>
              <div className="stage-input">
                <input id="stage" type="checkbox" value="contract" />
                <label htmlFor="stage">STAGE</label>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Etape 5/5",
      content: (
        <div className="rgpd-check-container">
          <h1>Dernière étape !</h1>
          <div className="all-fifth-input">
            <div className="rgpd-input">
              <input type="checkbox" id="rgpd" value="rgpd" />
              <label htmlFor="rgpd">
                En soumettant ce formulaire, vous consentez à ce que vos données
                personnelles soient traitées conformément au Règlement général
                sur la protection des données (RGPD). Vos informations seront
                utilisées dans le but de traiter votre candidature à des offres
                d'emploi et faciliter le processus de recrutement. Veuillez
                consulter notre politique de confidentialité pour plus
                d'informations sur la manière dont nous protégeons et utilisons
                vos données.
              </label>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Effectuez ici la logique de soumission du formulaire
  };

  const renderCarouselItem = (stepIndex) => {
    const step = steps[stepIndex];
    if (!step) {
      return null; // Ou un message d'erreur approprié
    }

    return (
      <div key={stepIndex}>
        <h3>{step.label}</h3>
        {step.content}
      </div>
    );
  };

  return (
    <div className="container-register-candidate">
      <form className="form-candidate-container" onSubmit={handleSubmit}>
        <Carousel
          value={[activeStep]}
          numVisible={1}
          numScroll={1}
          circular={false}
          responsiveOptions={[
            {
              breakpoint: "1024px",
              numVisible: 1,
              numScroll: 1,
            },
          ]}
          itemTemplate={renderCarouselItem}
        />

        {/* Boutons de navigation */}
        <div className="btn-navigation">
          {activeStep !== 0 ? (
            <Button
              label={<BsArrowLeftCircle />}
              onClick={handlePrev}
              className="p-button-secondary"
            />
          ) : (
            <div className="p-button-secondary" />
          )}
          {activeStep !== steps.length - 1 ? (
            <Button
              label={<BsArrowRightCircle />}
              onClick={handleNext}
              className="p-button-success"
            />
          ) : (
            <Button
              type="submit"
              label="Valider"
              className="p-button-success"
              onClick={handleFormSubmit}
            />
          )}
        </div>
      </form>
    </div>
  );
}
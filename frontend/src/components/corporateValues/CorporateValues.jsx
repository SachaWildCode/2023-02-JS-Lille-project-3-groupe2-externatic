import React from "react";
import { useMediaQuery } from "@react-hook/media-query";
import { FiUsers, FiRefreshCw, FiTrendingUp } from "react-icons/fi";
import "./CorporateValues.scss";

export default function CorporateValues() {
  const matchMobile = useMediaQuery("only screen and (max-width: 1000px)");
  const matchDesktop = useMediaQuery("only screen and (min-width: 1000px)");

  if (matchMobile)
    return (
      <div
        // className={
        //   role === "default" ? "" : role === "enterprise" && "role_enterprise"
        // }
        className="default"
      >
        <div className="container-values-mobile">
          <div className="image-text-mobile">
            <img
              className="img-values-mobile"
              src="./src/assets/proximite.jpg"
              alt="solidarity"
            />
            <div className="presentation-text-mobile">
              <div className="title-values-mobile">
                <h2>Notre proximité</h2>
                <FiUsers className="icon-react-mobile" />
              </div>
              <p className="p-mobile">
                L’expérience professionnelle est une chose. L’expérience de vie
                en est une autre. Alors nos consultants prennent le temps de
                faire connaissance avec chaque personne, pour comprendre le
                contexte, le parcours, les envies et les projets.
              </p>
            </div>
          </div>

          <div className="image-text-mobile">
            <img
              className="img-values-mobile"
              src="./src/assets/performance.jpg"
              alt="woman's working"
            />
            <div className="presentation-text-mobile">
              <div className="title-values-mobile">
                <h2>Notre performance</h2>
                <FiTrendingUp className="icon-react-mobile" />
              </div>
              <p className="p-mobile">
                Notre réseau est une force et nous y travaillons sans relâche.
                Notre expérience nous permet d’identifier les vrais besoins
                d’une entreprise et de ceux qui la rejoignent.
              </p>
            </div>
          </div>

          <div className="image-text-mobile">
            <img
              className="img-values-mobile"
              src="./src/assets/durable.jpg"
              alt="smile"
            />
            <div className="presentation-text-mobile">
              <div className="title-values-mobile">
                <h2>Notre durabilité</h2>
                <FiRefreshCw className="icon-react-mobile" />
              </div>
              <p className="p-mobile">
                Notre challenge est de trouver l’équipe qui fonctionnera
                ensemble de manière professionnelle et personnelle, pour aller
                jusqu’au bout d’un projet commun. Notre responsabilité vis-à-vis
                des impacts de nos décisions et nos actions sur le long-terme
                correspondent également à notre politique RSE.
              </p>
            </div>
          </div>
        </div>
      </div>
    );

  if (matchDesktop)
    return (
      <div
        // className={
        //   role === "default" ? "" : role === "enterprise" && "role_enterprise"
        // }
        className="default"
      >
        <div className="container-values-desktop">
          <div className="image-text-desktop">
            <img
              className="img-values-desktop"
              src="./src/assets/proximite.jpg"
              alt="solidarity"
            />
            <div className="presentation-text-desktop">
              <div className="title-values-desktop">
                <h2>Notre proximité</h2>
                <FiUsers className="icon-react-desktop" />
              </div>
              <p className="p-desktop">
                L’expérience professionnelle est une chose. L’expérience de vie
                en est une autre. Alors nos consultants prennent le temps de
                faire connaissance avec chaque personne, pour comprendre le
                contexte, le parcours, les envies et les projets.
              </p>
            </div>
          </div>

          <div className="image-text-desktop">
            <div className="presentation-text-desktop">
              <div className="title-values-desktop">
                <h2>Notre performance</h2>
                <FiTrendingUp className="icon-react-desktop" />
              </div>
              <p className="p-desktop">
                Notre réseau est une force et nous y travaillons sans relâche.
                Notre expérience nous permet d’identifier les vrais besoins
                d’une entreprise et de ceux qui la rejoignent.
              </p>
            </div>
            <img
              className="img-values-desktop"
              src="./src/assets/performance.jpg"
              alt="woman's working"
            />
          </div>

          <div className="image-text-desktop">
            <img
              className="img-values-desktop"
              src="./src/assets/durable.jpg"
              alt="smile"
            />
            <div className="presentation-text-desktop">
              <div className="title-values-desktop">
                <h2>Notre durabilité</h2>
                <FiRefreshCw className="icon-react-desktop" />
              </div>
              <p className="p-desktop">
                Notre challenge est de trouver l’équipe qui fonctionnera
                ensemble de manière professionnelle et personnelle, pour aller
                jusqu’au bout d’un projet commun. Notre responsabilité vis-à-vis
                des impacts de nos décisions et nos actions sur le long-terme
                correspondent également à notre politique RSE.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

// CorporateValues.propTypes = {
//   role: PropTypes.string.isRequired,
// };

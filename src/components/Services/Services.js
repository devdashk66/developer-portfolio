import React, { useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./Services.css";
import Fade from "react-reveal/Fade";

const Services = () => {
  const [openModal, setOpenModal] = useState(0);

  const handelModal = (modal) => {
    setOpenModal(modal);
  };

  return (
    <section id="services" className="services section">
      <SectionHeading title="Services" description="What i offer" />

      <div className="services-container container grid">
        <Fade bottom>
          <div className="services-content">
            <div>
              <i class="uil uil-react services-icon"></i>
              <h3 className="services-title">
                React <br /> Development
              </h3>
            </div>
            <span className="services-button" onClick={() => handelModal(1)}>
              View More <i class="uil uil-arrow-right services-button-icon"></i>
            </span>

            <div
              className={
                openModal === 1
                  ? "services-modal active-modal"
                  : "services-modal"
              }
            >
              <div className="services-modal-content">
                <i
                  class="uil uil-times services-modal-close"
                  onClick={() => handelModal(0)}
                ></i>

                <h3 className="services-modal-title">Product Designer</h3>

                <p className="services-modal-dec">
                  Service with more than 3 years of experience.Providing quality
                  work to clients and companies.
                </p>

                <ul className="services-modal-services grid">
                  <li className="services-modal-service">
                    <i class="uil uil-check-circle services-modal-icon"></i>
                    <p className="services-modal-info">
                      I develop the user interface.
                    </p>
                  </li>

                  <li className="services-modal-service">
                    <i class="uil uil-check-circle services-modal-icon"></i>
                    <p className="services-modal-info">Web page development.</p>
                  </li>

                  <li className="services-modal-service">
                    <i class="uil uil-check-circle services-modal-icon"></i>
                    <p className="services-modal-info">
                      I create ux element interactions.
                    </p>
                  </li>

                  <li className="services-modal-service">
                    <i class="uil uil-check-circle services-modal-icon"></i>
                    <p className="services-modal-info">
                      I position your company brand.
                    </p>
                  </li>

                  <li className="services-modal-service">
                    <i class="uil uil-check-circle services-modal-icon"></i>
                    <p className="services-modal-info">
                      Design and mockups of products for companies.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Fade>

        <Fade bottom>
          <div className="services-content">
            <div>
              <i class="uil uil-arrow services-icon"></i>
              <h3 className="services-title">
                Full-Stack <br /> Development
              </h3>
            </div>
            <span className="services-button" onClick={() => handelModal(2)}>
              View More <i class="uil uil-arrow-right services-button-icon"></i>
            </span>

            <div
              className={
                openModal === 2
                  ? "services-modal active-modal"
                  : "services-modal"
              }
            >
              <div className="services-modal-content">
                <i
                  class="uil uil-times services-modal-close"
                  onClick={() => handelModal(0)}
                ></i>

                <h3 className="services-modal-title">Ui/Ux Designer</h3>

                <p className="services-modal-dec">
                  Service with more than 3 years of experience.Providing quality
                  work to clients and companies.
                </p>

                <ul className="services-modal-services grid">
                  <li className="services-modal-service">
                    <i class="uil uil-check-circle services-modal-icon"></i>
                    <p className="services-modal-info">
                      I develop the user interface.
                    </p>
                  </li>

                  <li className="services-modal-service">
                    <i class="uil uil-check-circle services-modal-icon"></i>
                    <p className="services-modal-info">Web page development.</p>
                  </li>

                  <li className="services-modal-service">
                    <i class="uil uil-check-circle services-modal-icon"></i>
                    <p className="services-modal-info">
                      I create ux element interactions.
                    </p>
                  </li>

                  <li className="services-modal-service">
                    <i class="uil uil-check-circle services-modal-icon"></i>
                    <p className="services-modal-info">
                      I position your company brand.
                    </p>
                  </li>

                  <li className="services-modal-service">
                    <i class="uil uil-check-circle services-modal-icon"></i>
                    <p className="services-modal-info">
                      Design and mockups of products for companies.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="services-content">
            <div>
              <i class="uil uil-browser services-icon"></i>
              <h3 className="services-title">
                Web <br /> Development
              </h3>
            </div>
            <span className="services-button" onClick={() => handelModal(3)}>
              View More <i class="uil uil-arrow-right services-button-icon"></i>
            </span>

            <div
              className={
                openModal === 3
                  ? "services-modal active-modal"
                  : "services-modal"
              }
            >
              <div className="services-modal-content">
                <i
                  class="uil uil-times services-modal-close"
                  onClick={() => handelModal(0)}
                ></i>

                <h3 className="services-modal-title">Visual Designer</h3>

                <p className="services-modal-dec">
                  Service with more than 3 years of experience.Providing quality
                  work to clients and companies.
                </p>

                <ul className="services-modal-services grid">
                  <li className="services-modal-service">
                    <i class="uil uil-check-circle services-modal-icon"></i>
                    <p className="services-modal-info">
                      I develop the user interface.
                    </p>
                  </li>

                  <li className="services-modal-service">
                    <i class="uil uil-check-circle services-modal-icon"></i>
                    <p className="services-modal-info">Web page development.</p>
                  </li>

                  <li className="services-modal-service">
                    <i class="uil uil-check-circle services-modal-icon"></i>
                    <p className="services-modal-info">
                      I create ux element interactions.
                    </p>
                  </li>

                  <li className="services-modal-service">
                    <i class="uil uil-check-circle services-modal-icon"></i>
                    <p className="services-modal-info">
                      I position your company brand.
                    </p>
                  </li>

                  <li className="services-modal-service">
                    <i class="uil uil-check-circle services-modal-icon"></i>
                    <p className="services-modal-info">
                      Design and mockups of products for companies.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Services;

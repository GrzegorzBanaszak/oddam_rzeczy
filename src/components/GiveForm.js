import React from "react";
import Nav from "./Nav";
import openImage from "../assets/Form-Hero-Image.jpg";
import decoration from "../assets/Decoration.svg";
import { useState } from "react";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";
import HomeContact from "./HomeContact";
import StepSummary from "./StepSummary";
import StepThanks from "./StepThanks";
import NavMobile from "./NavMobile";

const formValuesDef = {
  whoToGiveBack: "",
  numberOfBags: "",
  location: "",
  whoHelp: "",
  organization: "",
  postcode: "",
  phoneNumber: "",
  street: "",
  time: "",
  data: "",
  comments: "",
  city: "",
};
const GiveForm = () => {
  const [formValues, setFormValues] = useState(formValuesDef);
  const [formStep, setFormStep] = useState(1);

  const renderStep = () => {
    switch (formStep) {
      case 1:
        return (
          <Step1
            formValues={formValues}
            setFormValues={setFormValues}
            setFormStep={setFormStep}
          />
        );
      case 2:
        return (
          <Step2
            formValues={formValues}
            setFormValues={setFormValues}
            setFormStep={setFormStep}
          />
        );
      case 3:
        return (
          <Step3
            formValues={formValues}
            setFormValues={setFormValues}
            setFormStep={setFormStep}
          />
        );
      case 4:
        return (
          <Step4
            formValues={formValues}
            setFormValues={setFormValues}
            setFormStep={setFormStep}
          />
        );
      case 5:
        return (
          <StepSummary formValues={formValues} setFormStep={setFormStep} />
        );
      case 6:
        return <StepThanks />;
      default:
        <div>Error</div>;
    }
  };
  return (
    <>
      <NavMobile />
      <section className="give-open">
        <div
          className="give-col--left"
          style={{ backgroundImage: `url(${openImage})` }}
        ></div>
        <div className="give-col--right">
          <Nav />
          <div className="give-content">
            <h2 className="give-title">Oddaj rzeczy, kt??rych ju?? nie chcesz</h2>
            <h2 className="give-title">POTRZEBUJ??CYM</h2>
            <img
              className="give-decoration"
              src={decoration}
              alt="decoration"
            />
            <h3 className="give-subtitle">Wystarcz?? 4 proste kroki:</h3>
            <ul className="give-steps">
              <li className="give-step">
                <div>1</div>
                <p>Wybierz rzeczy</p>
              </li>
              <li className="give-step">
                <div>2</div>
                <p>Spakuj w worki</p>
              </li>
              <li className="give-step">
                <div>3</div>
                <p>Wybierz fundacje</p>
              </li>
              <li className="give-step">
                <div>4</div>
                <p>Zam??w kuriera</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {renderStep()}
      <HomeContact />
    </>
  );
};

export default GiveForm;

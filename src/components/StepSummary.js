import React from "react";
import bg from "../assets/Background-Form.jpg";
import clothes from "../assets/clothes.png";
import recycling from "../assets/recycling.png";
const StepSummary = ({ formValues, setFormValues, setFormStep }) => {
  return (
    <section className="steps">
      <div
        className="steps-container"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="steps-content">
          <h3>Podsumowanie Twojej darowizny</h3>
          <div className="summery-row--1">
            <h4 className="summery-title">Oddajesz:</h4>
            <div className="summery-info">
              <img src={clothes} alt="clothes" />
              {`${formValues.step2} worki,${formValues.step1},${formValues.step3.whoHelp}`}
            </div>
            <div className="summery-info">
              <img src={recycling} alt="recycling" />
              {`do lokalizacji: ${formValues.step3.location}`}
            </div>
          </div>
        </div>
        <div className="steps-control">
          <div to="step-2" className="controler" onClick={() => setFormStep(4)}>
            Wstecz
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepSummary;

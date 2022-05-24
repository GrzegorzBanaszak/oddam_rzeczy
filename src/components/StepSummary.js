import React from "react";
import bg from "../assets/Background-Form.jpg";
import clothes from "../assets/clothes.png";
import recycling from "../assets/recycling.png";
const StepSummary = ({ formValues, setFormValues, setFormStep }) => {
  const { step1, step2, step3, step4 } = formValues;
  const formatPhone = () => {
    let subString = "";
    for (let i = 0; i < 9; i = i + 3) {
      if (i === 0) {
        subString += step4.phoneNumber.substring(i, i + 3);
      } else {
        subString += " " + step4.phoneNumber.substring(i, i + 3);
      }
    }
    return subString;
  };

  const formatPostCode = () => {
    return step4.postcode.substr(0, 2) + "-" + step4.postcode.substr(2);
  };

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
              {`${step2} worki,${step1},${step3.whoHelp}`}
            </div>
            <div className="summery-info">
              <img src={recycling} alt="recycling" />
              {`do lokalizacji: ${formValues.step3.location}`}
            </div>
          </div>
          <div className="summery-row--2">
            <div className="summery-col">
              <h4 className="summery-title">Adres odbioru:</h4>
              <div className="summer-table">
                Ulica<p>{step4.street}</p>
                Miasto <p>{step4.city}</p>
                Kod pocztowy <p>{formatPostCode()}</p>
                Numer telefonu <p>{formatPhone()}</p>
              </div>
            </div>
            <div className="summery-col">
              <h4 className="summery-title">Termin odbioru:</h4>
              <div className="summer-table">
                Data <p>{step4.data}</p>
                Godzina <p>{step4.time}</p>
                Uwagi dla kuriera <p>{step4.comments}</p>
              </div>
            </div>
          </div>
          <div className="steps-control">
            <div
              to="step-2"
              className="controler"
              onClick={() => setFormStep(4)}
            >
              Wstecz
            </div>
            <div to="step-2" className="controler">
              Potwierdzam
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepSummary;

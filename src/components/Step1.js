import React from "react";
import StepsWaring from "./StepsWaring";
import bg from "../assets/Background-Form.jpg";

const selectTable = [
  "ubrania, które nadają się do ponownego użycia",
  "ubrania, do wyrzucenia",
  "zabawki",
  "książki",
  "Inne",
];

const Step1 = ({ formValues, setFormValues, setFormStep }) => {
  return (
    <section className="steps">
      <StepsWaring>
        <h4>Ważne</h4>
        <p>
          Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
          wiedzieć komu najlepiej je przekazać.
        </p>
      </StepsWaring>
      <div
        className="steps-container"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="steps-content">
          <h5>Krok 1/4</h5>
          <h3>Zaznacz co chcesz oddać:</h3>
          <div className="select-container--1">
            {selectTable.map((select, index) => (
              <div
                key={index + 1254}
                className="select-element"
                onClick={() =>
                  setFormValues((prev) => ({ ...prev, whoToGiveBack: select }))
                }
              >
                <span
                  style={{
                    backgroundColor:
                      formValues.whoToGiveBack === select
                        ? "#FAD648"
                        : "transparent",
                  }}
                ></span>
                {select}
              </div>
            ))}
          </div>
          <div className="steps-control">
            {formValues.whoToGiveBack && (
              <div
                to="step-2"
                className="controler"
                onClick={() => setFormStep(2)}
              >
                Dalej
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step1;

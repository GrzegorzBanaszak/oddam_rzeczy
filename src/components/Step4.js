import React from "react";
import StepsWaring from "./StepsWaring";
import bg from "../assets/Background-Form.jpg";
import arrowDown from "../assets/Icon-Arrow-Down.svg";
import arrowUp from "../assets/Icon-Arrow-Up.svg";
import { useState } from "react";
const Step4 = ({ formValues, setFormValues, setFormStep }) => {
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
          <h5>Krok 4/4</h5>
          <h3>Podaj adres oraz termin odbioru rzecz przez kuriera</h3>
          <div className="select-container--4">
            <div className="select-col">
              <h4 className="select-subtitle">Adres odbioru:</h4>
              <div className="steps-fild">
                Ulica: <input type="text" />
              </div>
              <div className="steps-fild">
                Miasto: <input type="text" />
              </div>
              <div className="steps-fild">
                Kod pocztowy: <input type="text" />
              </div>
              <div className="steps-fild">
                Numer telefonu: <input type="text" />
              </div>
            </div>
            <div className="select-col">
              <h4 className="select-subtitle">Termin odbioru:</h4>
              <div className="steps-fild">
                Data: <input type="text" />
              </div>
              <div className="steps-fild">
                Godzina: <input type="text" />
              </div>
              <div className="steps-fild">
                Uwagi dla kuriera: <textarea name="" cols="18" />
              </div>
            </div>
          </div>
          <div className="steps-control">
            <div
              to="step-2"
              className="controler"
              onClick={() => setFormStep(3)}
            >
              Wstecz
            </div>
            {formValues.step2 && (
              <div
                to="step-2"
                className="controler"
                onClick={() => setFormStep(5)}
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

export default Step4;

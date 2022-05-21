import React from "react";
import StepsWaring from "./StepsWaring";
import bg from "../assets/Background-Form.jpg";
import arrowDown from "../assets/Icon-Arrow-Down.svg";
import arrowUp from "../assets/Icon-Arrow-Up.svg";
import { useState } from "react";
const Step2 = ({ formValues, setFormValues, setFormStep }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="steps">
      <StepsWaring>
        <h4>Ważne</h4>
        <p>
          Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję
          jak poprawnie spakować rzeczy znajdziesz TUTAJ.
        </p>
      </StepsWaring>
      <div
        className="steps-container"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="steps-content">
          <h5>Krok 2/4</h5>
          <h3>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
          <div className="select-container--2">
            <p>Liczba 60l worków:</p>
            <div
              className="select-value"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {formValues.step2 === "" ? "- wybierz -" : formValues.step2}
              <img src={isOpen ? arrowDown : arrowUp} alt="arrow" />
              {isOpen && (
                <div className="select-list">
                  <p
                    onClick={() =>
                      setFormValues((prev) => ({ ...prev, step2: 1 }))
                    }
                  >
                    1
                  </p>
                  <p
                    onClick={() =>
                      setFormValues((prev) => ({ ...prev, step2: 2 }))
                    }
                  >
                    2
                  </p>
                  <p
                    onClick={() =>
                      setFormValues((prev) => ({ ...prev, step2: 3 }))
                    }
                  >
                    3
                  </p>
                  <p
                    onClick={() =>
                      setFormValues((prev) => ({ ...prev, step2: 4 }))
                    }
                  >
                    4
                  </p>
                  <p
                    onClick={() =>
                      setFormValues((prev) => ({ ...prev, step2: 5 }))
                    }
                  >
                    5
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="steps-control">
            <div
              to="step-2"
              className="controler"
              onClick={() => setFormStep(1)}
            >
              Wstecz
            </div>
            {formValues.step2 && (
              <div
                to="step-2"
                className="controler"
                onClick={() => setFormStep(3)}
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

export default Step2;

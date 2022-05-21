import React from "react";
import StepsWaring from "./StepsWaring";
import bg from "../assets/Background-Form.jpg";

const Step1 = () => {
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
          <div className="select-container">
            <div className="select-element">
              <span></span>ubrania, które nadają się do ponownego użycia
            </div>
            <div className="select-element">
              <span></span>ubrania, do wyrzucenia
            </div>
            <div className="select-element">
              <span></span>zabawki
            </div>
            <div className="select-element">
              <span></span>książki
            </div>
            <div className="select-element">
              <span></span>Inne
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step1;

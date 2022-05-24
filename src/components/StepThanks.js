import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/Background-Form.jpg";
import decoration from "../assets/Decoration.svg";
const StepThanks = () => {
  const nav = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      nav("/");
    }, 5000);
  }, []);
  return (
    <section className="steps">
      <div
        className="steps-container"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="summery-thangs">
          <h2>
            Dziękujemy za przesłanie formularza Na maila prześlemy wszelkie
            informacje o odbiorze.
          </h2>
          <img src={decoration} alt="decoration" />
        </div>
      </div>
    </section>
  );
};

export default StepThanks;

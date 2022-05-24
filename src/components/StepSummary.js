import { addDoc, collection } from "firebase/firestore";
import React from "react";
import bg from "../assets/Background-Form.jpg";
import clothes from "../assets/clothes.png";
import recycling from "../assets/recycling.png";
import { db } from "../firebase";
const StepSummary = ({ formValues, setFormStep }) => {
  const {
    whoToGiveBack,
    numberOfBags,
    location,
    whoHelp,
    postcode,
    phoneNumber,
    street,
    time,
    data,
    comments,
    city,
  } = formValues;
  const donateRef = collection(db, "thingsToDonate");

  const summerySubmit = async () => {
    try {
      await addDoc(donateRef, formValues);
      setFormStep(6);
    } catch (error) {
      console.log(error);
    }
  };

  const formatPhone = () => {
    let subString = "";
    for (let i = 0; i < 9; i = i + 3) {
      if (i === 0) {
        subString += phoneNumber.substring(i, i + 3);
      } else {
        subString += " " + phoneNumber.substring(i, i + 3);
      }
    }
    return subString;
  };

  const formatPostCode = () => {
    return postcode.substr(0, 2) + "-" + postcode.substr(2);
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
              {`${numberOfBags} worki,${whoToGiveBack},${whoHelp}`}
            </div>
            <div className="summery-info">
              <img src={recycling} alt="recycling" />
              {`do lokalizacji: ${location}`}
            </div>
          </div>
          <div className="summery-row--2">
            <div className="summery-col">
              <h4 className="summery-title">Adres odbioru:</h4>
              <div className="summer-table">
                Ulica<p>{street}</p>
                Miasto <p>{city}</p>
                Kod pocztowy <p>{formatPostCode()}</p>
                Numer telefonu <p>{formatPhone()}</p>
              </div>
            </div>
            <div className="summery-col">
              <h4 className="summery-title">Termin odbioru:</h4>
              <div className="summer-table">
                Data <p>{data}</p>
                Godzina <p>{time}</p>
                Uwagi dla kuriera <p>{comments}</p>
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
            <div to="step-2" className="controler" onClick={summerySubmit}>
              Potwierdzam
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepSummary;

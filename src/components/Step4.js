import React from "react";
import StepsWaring from "./StepsWaring";
import bg from "../assets/Background-Form.jpg";
const Step4 = ({ formValues, setFormValues, setFormStep }) => {
  const setNewValue = (type, value) => {
    setFormValues((prev) => ({
      ...prev,
      step4: { ...prev.step4, [type]: value },
    }));
  };

  const inputChangeHandel = (e) => {
    const regOnlyNumber = /^[0-9]*$/;
    const regTime = /^[0-9]|[:]*$/;
    const regaxData = /^[0-9]|[.]*$/;
    switch (e.target.name) {
      case "postcode":
        if (e.target.value.match(regOnlyNumber) && e.target.value.length < 6) {
          setNewValue(e.target.name, e.target.value);
        }
        break;
      case "phoneNumber":
        if (e.target.value.match(regOnlyNumber) && e.target.value.length < 10) {
          setNewValue(e.target.name, e.target.value);
        }
        break;
      case "time":
        if (e.target.value.match(regTime) && e.target.value.length < 6) {
          setNewValue(e.target.name, e.target.value);
        }

        break;
      case "data":
        if (e.target.value.match(regaxData) && e.target.value.length < 11) {
          setNewValue(e.target.name, e.target.value);
        }

        break;
      default:
        setNewValue(e.target.name, e.target.value);

        break;
    }
  };

  const isFormValid = () => {
    const { postcode, phoneNumber, street, time, data, city } =
      formValues.step4;
    if (
      postcode.length > 0 &&
      phoneNumber.length > 0 &&
      street.length > 0 &&
      time.length > 0 &&
      data.length > 0 &&
      city.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  };
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
                Ulica:
                <input
                  type="text"
                  name="street"
                  onChange={inputChangeHandel}
                  value={formValues.step4.street}
                />
              </div>
              <div className="steps-fild">
                Miasto:
                <input
                  type="text"
                  name="city"
                  onChange={inputChangeHandel}
                  value={formValues.step4.city}
                />
              </div>
              <div className="steps-fild">
                Kod pocztowy:
                <input
                  type="text"
                  name="postcode"
                  onChange={inputChangeHandel}
                  value={formValues.step4.postcode}
                />
              </div>
              <div className="steps-fild">
                Numer telefonu:
                <input
                  type="text"
                  name="phoneNumber"
                  onChange={inputChangeHandel}
                  value={formValues.step4.phoneNumber}
                />
              </div>
            </div>
            <div className="select-col">
              <h4 className="select-subtitle">Termin odbioru:</h4>
              <div className="steps-fild">
                Data:
                <input
                  type="text"
                  name="data"
                  onChange={inputChangeHandel}
                  value={formValues.step4.data}
                />
              </div>
              <div className="steps-fild">
                Godzina:
                <input
                  type="text"
                  name="time"
                  onChange={inputChangeHandel}
                  value={formValues.step4.time}
                />
              </div>
              <div className="steps-fild">
                Uwagi dla kuriera:
                <textarea
                  cols="18"
                  rows="6"
                  name="comments"
                  onChange={inputChangeHandel}
                  value={formValues.step4.comments}
                />
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
            {isFormValid() && (
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

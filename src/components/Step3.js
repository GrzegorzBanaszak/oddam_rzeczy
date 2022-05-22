import arrowDown from "../assets/Icon-Arrow-Down.svg";
import arrowUp from "../assets/Icon-Arrow-Up.svg";
import { useState } from "react";
import StepsWaring from "./StepsWaring";
import bg from "../assets/Background-Form.jpg";

const locations = ["Poznań", "Warszawa", "Kraków", "Wrocław", "Katowice"];
const whoList = [
  "dzieciom",
  "samotnym matkom",
  "bezdomnym",
  "niepełnosprawnym",
  "osobom starszym",
];
const Step3 = ({ formValues, setFormValues, setFormStep }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOrganizationChange = (e) => {
    setFormValues((prev) => ({
      ...prev,
      step3: { ...prev.step3, [e.target.name]: e.target.value },
    }));
  };
  return (
    <section className="steps">
      <StepsWaring>
        <h4>Ważne</h4>
        <p>
          Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w
          wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź
          celu ich pomocy.
        </p>
      </StepsWaring>
      <div
        className="steps-container"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="steps-content">
          <h5>Krok 3/4</h5>
          <h3>Lokalizacja:</h3>
          <div className="select-container--3">
            <div
              className="select-value"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {formValues.step3.location === ""
                ? "- wybierz -"
                : formValues.step3.location}
              <img src={isOpen ? arrowDown : arrowUp} alt="arrow" />
              {isOpen && (
                <div className="select-list">
                  {locations.map((location, index) => (
                    <p
                      key={index}
                      name="location"
                      onClick={() =>
                        setFormValues((prev) => ({
                          ...prev,
                          step3: { ...prev.step3, location },
                        }))
                      }
                    >
                      {location}
                    </p>
                  ))}
                </div>
              )}
            </div>
            <h4 className="select-subtitle">Komu chcesz pomóc?</h4>
            <div className="select-who">
              {whoList.map((whoHelp, index) => (
                <div
                  key={index}
                  className="select-who--item"
                  style={{
                    backgroundColor:
                      formValues.step3.whoHelp === whoHelp
                        ? "#FAD648"
                        : "transparent",
                  }}
                  onClick={() =>
                    setFormValues((prev) => ({
                      ...prev,
                      step3: { ...prev.step3, whoHelp },
                    }))
                  }
                >
                  {whoHelp}
                </div>
              ))}
            </div>
            <h4 className="select-subtitle">
              Wpisz nazwę konkretnej organizacji (opcjonalnie)
            </h4>
            <input
              className="steps-organization"
              name="organization"
              value={formValues.step3.organization}
              onChange={(e) => handleOrganizationChange(e)}
            />
          </div>
          <div className="steps-control">
            <div
              to="step-2"
              className="controler"
              onClick={() => setFormStep(2)}
            >
              Wstecz
            </div>
            {formValues.step3.location && formValues.step3.whoHelp && (
              <div
                to="step-2"
                className="controler"
                onClick={() => setFormStep(4)}
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

export default Step3;

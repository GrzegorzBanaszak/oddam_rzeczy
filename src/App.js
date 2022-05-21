import "./scss/main.scss";
import "./scss/reset.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import GiveForm from "./components/GiveForm";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import { useState } from "react";
import { createContext } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

export const DefaultContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const [formStep, setFormStep] = useState(1);
  const [loading, setLoading] = useState(true);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoading(false);
  });

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <BrowserRouter>
      <DefaultContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oddaj-rzeczy" element={user ? <GiveForm /> : <Login />}>
            <Route
              index
              element={
                formStep === 1 ? (
                  <Step1 />
                ) : formStep > 1 ? (
                  <Navigate to={`/oddaj-rzeczy/step-${formStep}`} />
                ) : (
                  <Navigate to={`/oddaj-rzeczy/`} />
                )
              }
            />
            <Route
              path="step-2"
              element={
                formStep === 2 ? (
                  <Step2 />
                ) : formStep > 1 ? (
                  <Navigate to={`/oddaj-rzeczy/step-${formStep}`} />
                ) : (
                  <Navigate to={`/oddaj-rzeczy/`} />
                )
              }
            />
            <Route
              path="step-3"
              element={
                formStep === 3 ? (
                  <Step3 />
                ) : formStep > 1 ? (
                  <Navigate to={`/oddaj-rzeczy/step-${formStep}`} />
                ) : (
                  <Navigate to={`/oddaj-rzeczy/`} />
                )
              }
            />
            <Route
              path="step-4"
              element={
                formStep === 4 ? (
                  <Step4 />
                ) : formStep > 1 ? (
                  <Navigate to={`/oddaj-rzeczy/step-${formStep}`} />
                ) : (
                  <Navigate to={`/oddaj-rzeczy/`} />
                )
              }
            />
          </Route>
          <Route path="/logowanie" element={<Login />} />
          <Route path="/rejestracja" element={<Register />} />
          <Route path="/wylogowanie" element={<Logout />} />
        </Routes>
      </DefaultContext.Provider>
    </BrowserRouter>
  );
}

export default App;

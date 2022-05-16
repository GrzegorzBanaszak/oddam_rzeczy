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

export const DefaultContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <DefaultContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/oddaj-rzeczy"
            element={user ? <GiveForm /> : <Navigate to="/logowanie" />}
          />
          <Route path="/logowanie" element={<Login />} />
          <Route path="/rejestracja" element={<Register />} />
          <Route path="/wylogowanie" element={<Logout />} />
        </Routes>
      </DefaultContext.Provider>
    </BrowserRouter>
  );
}

export default App;

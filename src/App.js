import "./scss/main.scss";
import "./scss/reset.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oddaj-rzeczy" element={<Form />} />
        <Route path="/logowanie" element={<Login />} />
        <Route path="/rejestracja" element={<Register />} />
        <Route path="/wylogowanie" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

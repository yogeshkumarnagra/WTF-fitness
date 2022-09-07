import { Routes, Route } from "react-router-dom";
import { Gym, Home } from "../views";
import { Navbar, Footer } from "../components/common";
import { data } from "../utils";
import "./App.css";

export function App() {
  return (
    <div className="App">
      <Navbar navFields={data.navFields} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/gym" element={<Gym />} />
      </Routes>
      <Footer />
    </div>
  );
}

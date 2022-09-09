import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Gym, Home, PageNotFound } from "../views";
import { Navbar, Footer, Loader } from "../components/common";
import { data } from "../utils";

import "./App.css";

export function App() {
  const [isLoader, setIsLoader] = useState(true);
  const [timer, setTimer] = useState(null);
  useEffect(() => {
    if (!timer) {
      setTimer(
        setTimeout(() => {
          setIsLoader(false);
        }, 500)
      );
    } else {
      setTimer(clearTimeout(timer));
    }
  }, [isLoader]);
  return (
    <div className="App ">
      <nav>
        <Navbar navFields={data.navFields} />
      </nav>
      {isLoader && <Loader />}
      {!isLoader && (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/gym" element={<Gym />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      )}
      <Footer />
    </div>
  );
}

import React from "react";
import "./navbar.css";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";

export function Navbar({ navFields }) {
  const login = false;

  return (
    <header className="header d-flex justify-between">
      <div className="d-flex align-center">
        <img src={logo} alt="logo img" width={100} height={"auto"} />
      </div>
      <div className="d-flex align-center">
        {navFields.map((field) => {
          if (field.name === "Login") {
            if (login) return <></>;
          }
          return (
            <Link key={field.name} to={field.href} className="nav-section">
              {field.name}
            </Link>
          );
        })}
      </div>
    </header>
  );
}

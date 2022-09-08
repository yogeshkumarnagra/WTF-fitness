import React from "react";
import "./footer.css";
import { footerData } from "../../../utils";
import logo from "../../../images/logo.png";

export function Footer() {
  return (
    <div className="footer">
      <div className="left-div">
        <div className="d-flex align-center">
          <img src={logo} alt="logo img" width={100} height={"auto"} />
        </div>
      </div>
      {footerData.fields?.map((field) => {
        return (
          <div key={field.heading} className="mid-div1">
            <div className="footer-heading">{field.heading}</div>
            {field.links?.map((link) => {
              return (
                <div key={link} className="footer-list">
                  {link}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

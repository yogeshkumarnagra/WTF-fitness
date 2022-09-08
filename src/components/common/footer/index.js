import React from "react";
import "./footer.css";
import { footerData } from "../../../utils";

export function Footer() {
  return (
    <div className="footer">
      <div className="left-div"></div>
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

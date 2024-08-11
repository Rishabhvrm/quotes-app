import React from "react";
import { TypeWriter } from "./TypeWriter";

const headerStyle = {
  backgroundColor: "#333333" /* Charcoal */,
  color: "#F5F5F5" /* White Smoke */,
  padding: "0.5%",
  fontFamily: "cursive",
  // fontFamily: "Gray Qo",
  fontSize: "25px",
  //   display: "flex",
  //   flexDirection: "column"
};

export function Header() {
  return (
    <div>
      <header align="center" style={headerStyle}>
        <h1>Quotes</h1>
      </header>
      <div align="right">
        {/* <TypeWriter /> */}
      </div>
    </div>
  );
}

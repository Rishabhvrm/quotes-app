import React from "react";

const headerStyle = {
  backgroundColor: "#333333" /* Charcoal */,
  color: "#F5F5F5" /* White Smoke */,
  padding: "0.5%",
  fontFamily: "cursive",
  fontSize: "25px"
};

export function Header() {
  return (
    <header align="center" style={headerStyle}>
      <h1>Quotes</h1>
      {/* <TypeWriter /> */}
    </header>
  );
}

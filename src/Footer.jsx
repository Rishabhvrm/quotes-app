import React from "react";
import EmailForm from "./EmailForm";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.footer}>
      <p> © 2024 Quote App. All rights reserved.</p>
      {/* <EmailForm /> */}
      <div style={{ fontFamily: "cursive", fontSize: "150%" }}>
        Quotes
        <div style={{ fontSize: "80%", paddingLeft: "5px" }}>- by Rishabh</div>
      </div>
    </div>
  );
}

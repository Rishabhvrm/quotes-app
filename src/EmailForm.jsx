import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import classes from "./NewQuote.module.css";

// const EmailForm = () => {
function EmailForm( {onCancel}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // EmailJS serviceId, templateId, publicKey
    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    // Create a new object that contains dynamic template params
    const templateParams = {
      to_name: "Quote App",
      from_name: name,
      from_email: email,
      message: message,
    };

    // send email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Email sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("Error sending email...", error);
        alert("Failed to send email. Please try again later.");
      }
    );
    
    onCancel();   // Close the modal
  };
  return (
    <div>
      <form className={classes.form} onSubmit={handleSubmit}>
      <h2>Email Quote:</h2>
        <label>
          Name:
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            cols="30"
            rows="10"
            placeholder="If you want to add a quote. Please Enter: Quote, Author and a Source"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>
        <p className={classes.actions}>
          <button type="button" onClick={onCancel}>Cancel</button>
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}

export default EmailForm
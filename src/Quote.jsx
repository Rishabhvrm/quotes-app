import React from "react";
import "./Quote.Module.css";


const linkStyle = {
    color: 'white', // Set the text color
    textDecoration: 'none', // Remove underline
  };
export function Quote({ text, author, source, sourceLink }) {
  return (
    <div className="quote-container">
      <p className="quote-text">{text}</p>
      <p className="quote-author">- {author},
        <a href={sourceLink} target="_blank" rel="noopener noreferrer" style={linkStyle}>
          <em> {source}</em>
        </a>
      </p>
    </div>
  );
}

import React from "react";
import { Quote } from "./Quote";
import "./Quotes.Module.css";
import quotesData from "./data/quotes-data.json";

export function Quotes() {
  return (
    <div className="quotes-container">
      {quotesData.map((quote, index) => (
        <Quote
          key={index}
          text={quote.text}
          author={quote.author}
          source={quote.source}
          sourceLink={quote.sourceLink}
        />
      ))}
    </div>
  );
}

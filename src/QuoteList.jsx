import React from "react";
import { Quote } from "./Quote";
import styles from "./QuoteList.module.css";
import quotesData from "./data/quotes-data.json";

export function QuoteList() {
  return (
    <div className={styles.quotesContainer}>
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

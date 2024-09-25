import React from "react";
import styles from "./Quote.module.css";

export function Quote({ text, author, source, sourceLink }) {
  return (
    <div className={styles.quoteContainer}>
      <p className={styles.quoteText}>
        <span>{text}</span>
      </p>
      <p className={styles.quoteAuthor}>
        - {author},
        <a
          href={sourceLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkStyle}
        >
          <em> {source}</em>
        </a>
      </p>
    </div>
  );
}

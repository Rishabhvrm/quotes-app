import React from "react";
import TypeWriterAnimation from "./TypeWriterAnimation";
import styles from "./Header.module.css";
import NewQuote from "./NewQuote";
import Modal from "./Modal";
import { MdPostAdd } from "react-icons/md";
import EmailForm  from "./EmailForm";

export function Header() {
  const [addQuoteModalIsVisible, setAddQuoteModalIsVisible] = React.useState(false);
  const [emailModalIsVisible, setEmailModalIsVisible] = React.useState(false);

  function showEmailModalHandler() {
    setEmailModalIsVisible(true);
  }

  function hideEmailModalHandler() {
    setEmailModalIsVisible(false);
  }

  function showAddQuteModalHandler() {
    setAddQuoteModalIsVisible(true);
  }

  function hideAddQuteModalHandler() {
    setAddQuoteModalIsVisible(false);
  }

  return (
    <div className={styles.header}>
      <div>
        <p>
          <button className={styles.button} onClick={showEmailModalHandler}>
            <MdPostAdd size={"2rem"} />
            Send Mail
          </button>
        </p>
        <div>
          {emailModalIsVisible && (
            <Modal onClose={hideEmailModalHandler}>
              <EmailForm onCancel={hideEmailModalHandler}/>
            </Modal>
          )}
        </div>
      </div>

      <div className={styles.header2}>
        <div className={styles.title}>Quotes</div>
        <TypeWriterAnimation />
      </div>

      <div>
        <p>
          <button className={styles.button} onClick={showAddQuteModalHandler}>
            <MdPostAdd size={"2rem"} />
            Add Quote
          </button>
        </p>
        <div>
          {addQuoteModalIsVisible && (
            <Modal onClose={hideAddQuteModalHandler}>
              <NewQuote onCancel={hideAddQuteModalHandler}/>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
}

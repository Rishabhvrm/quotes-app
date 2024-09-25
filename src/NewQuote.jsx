import classes from "./NewQuote.module.css";

function NewQuote({ onCancel}) {
  return (
    <form className={classes.form}>
      <h2>Submit Quote:</h2>
      <p>
        <label htmlFor="body">Quote:</label>
        <textarea id="body" placeholder="Add Quote" required rows={3} />
      </p>
      <p>
        <label htmlFor="name">Author:</label>
        <input type="text"  placeholder="Add Author" id="name" required />
      </p>
      <p>
        <label htmlFor="name">Source:</label>
        <input type="text" placeholder="Add Source" id="name" required />
      </p>
      <p>
        <label htmlFor="name">Source Link:</label>
        <input type="text" placeholder="Add Source Link" id="name" required />
      </p>
      <p>
        <label htmlFor="name">Key:</label>
        <input type="text"  placeholder="Provide a key to add quote" id="name" required />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewQuote;
import styles from "./Modal.module.css"

function Modal( { children, onClose } ) {
    return (
        <>
        <div className={styles.backdrop} onClick={onClose}/>
        <dialog className={styles.modal}
        open>
            {children}
        </dialog>
        </>
    );

}

export default Modal
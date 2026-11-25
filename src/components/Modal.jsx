import { FiX } from "react-icons/fi";
import "./Modal.css";
import { useEffect } from "react";

const Modal = ({ title, onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      // if the key is "Escape", call onClose
      if(KeyboardEvent.DOM_KEY_LOCATION_LEFT === e.key || e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
  document.body.style.overflow = "hidden";

  return () => {
    // put it back
    document.body.style.overflow = "auto";
  };
}, []);
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" aria-label="Close" onClick={onClose}>
          <FiX />
        </button>
        <h3 id="modal-title" className="modal-title">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
};

export default Modal;

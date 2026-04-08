import "./Modal.css";
import Form from "../Form/Form";

function Modal(props) {
  const { isModalOpen, selectedNote } = props;

  return (
    <div className={`modal ${isModalOpen ? "open-modal" : ""}`}>
      <div className="modal-content">
        <Form edit={true} note={selectedNote} />
      </div>
    </div>
  );
}

export default Modal;

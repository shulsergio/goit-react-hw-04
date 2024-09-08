import Modal from "react-modal";
import css from './ImageModal.module.css'; 

Modal.setAppElement("#root");

export default function ImageModal({ urlModal, altModal, modalIsOpen, closeModal }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={css.content} 
      overlayClassName={css.overlay} 
    >
      <img src={urlModal} alt={altModal} />
    </Modal>
  );
}

import Modal from "react-modal";
import css from './PhotosModal.module.css'; 

Modal.setAppElement("#root");

export default function PhotosModal({ urlModal, altModal, modalIsOpen, closeModal }) {
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

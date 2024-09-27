import css from "./ImageModal.module.css";
import Modal from "react-modal";
import { ImageData } from "../../types";
Modal.setAppElement("#root");

interface ImageModalProps {
  image: ImageData | null;
  closeModal: () => void;
  modalIsOpen: boolean;
}

const ImageModal: React.FC<ImageModalProps> = ({
  image,
  closeModal,
  modalIsOpen,
}) => {
  if (!image || !image.urls) return null;

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(171, 169, 169, 0.8)",
        },
        content: {
          top: "5%",
          bottom: "5%",
          left: "5%",
          right: "5%",
          marginRight: "auto",
          marginLeft: "auto",
          transform: "none",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          maxHeight: "90vh",
          maxWidth: "90vw",
        },
      }}
    >
      <div className={css.container}>
        <img
          className={css.image}
          src={image.urls.regular}
          alt={image.description}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;

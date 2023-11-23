import React, { useContext } from "react";
import Modal from "react-modal";
import { globalProvider } from "./context/Context";
import AddNewTaskModal from "./AddNewTask";
import EditTaskModal from "./EditTask";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 40,
    display: "flex",
    flexDirection: "column",
    gap: 30,
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};
function ModalComponent() {
  const { modalState, typeModal } = useContext(globalProvider)
  const [modalIsOpen, setIsOpen] = modalState
  const [modalType] = typeModal

  const getModalContent = () => {
    switch (modalType) {
      case 'Create Task':
        return <AddNewTaskModal />
      case 'Edit Task':
        return <EditTaskModal />
      default:
        break;
    }
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {getModalContent()}
      </Modal>
    </div>
  );
}

export default ModalComponent

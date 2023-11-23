import React, { useState, useContext } from "react";
import Modal from "react-modal";

import { globalProvider } from "./context/Context";

function AddNewTaskModal() {
  const { appData, modalState } = useContext(globalProvider)
  const [, setData] = appData
  const [, setIsOpen] = modalState
  const [taskId, setTaskId] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const [taskMessage, setTaskMessage] = useState("");
  const [taskDate, setTaskDate] = useState("");

  function handlerSubmit(event) {
    event.preventDefault();
    const newTaskData = {
      id: taskId,
      status: taskStatus,
      message: taskMessage,
      dueDate: new Date(taskDate),
    };
    setData((prev) => [newTaskData, ...prev])

    setIsOpen(false)

  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: "column",
      gap: 12
    }}>
      <h1> ADAUGA TASK NOU </h1>
      <label htmlFor="taskID">ID</label>
      <input
        type="text"
        name="taskId"
        value={taskId}
        onChange={(event) => setTaskId(event.target.value)} // eveniment la modficarea continutului
      />

      <label htmlFor="taskStatus">Status</label>

      <input
        type="text"
        name="taskStatus"
        value={taskStatus}
        onChange={(event) => setTaskStatus(event.target.value)} // eveniment la modficarea continutului
      />

      <label htmlFor="taskMessage">Message</label>

      <input
        type="text"
        name="taskMessage"
        value={taskMessage}
        onChange={(event) => setTaskMessage(event.target.value)} // eveniment la modficarea continutului
      />

      <label htmlFor="taskDate">Date</label>

      <input
        type="date"
        name="taskDate"
        value={taskDate}
        onChange={(event) => setTaskDate(event.target.value)} //
      />

      <button onClick={handlerSubmit}>Add</button>

    </div>
  );
}

export default AddNewTaskModal;

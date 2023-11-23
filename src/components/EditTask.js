import React, { useState } from "react";

function EditTaskModal() {

  const [taskId, setTaskId] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const [taskMessage, setTaskMessage] = useState("");
  const [taskDate, setTaskDate] = useState("");


  return (
    <div style={{
      display: 'flex',
      flexDirection: "column",
      gap: 12
    }}>
      <h1> EDITEAZA TASK </h1>
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

      <button>EDIT</button>

    </div>
  );
}

export default EditTaskModal;

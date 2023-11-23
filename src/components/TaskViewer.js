import React, { useContext } from "react";
import styles from "../stylings/TaskViewer.module.css";
import Card from "./Card";
import { globalProvider } from "./context/Context";
const TaskViewer = () => {
  const { appData, filteredData, modalState, typeModal } = useContext(globalProvider)
  const [data, setData] = appData
  const [filterData] = filteredData
  const [, setIsOpen] = modalState
  const [, setModalType] = typeModal

  return (
    <div className={styles.container}>
      <div className={styles.title}>Task manager </div>
      <button onClick={() => {
        setModalType('Create Task')
        setIsOpen(true)
      }}>CREATE A NEW TASK</button>

      <div className={styles.content}>
        {filterData.length > 0 ? filterData.map((item, index) => {
          return <Card key={index} item={item} data={data} setData={setData} />;
        }) : data.map((item, index) => {
          return <Card key={index} item={item} data={data} setData={setData} />;
        })}
      </div>
    </div>
  );
};

export default TaskViewer;

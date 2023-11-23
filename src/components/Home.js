import React from "react";
import TaskViewer from "./TaskViewer";
import Search from "./Search";
function Home() {
  return (
    <div className="App">
      <Search />
      <TaskViewer />
    </div>
  );
}
export default Home;

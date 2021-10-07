import React from "react";
import TaskList from "./TaskList";
import "../App.css";
import TaskListContextProvider from "../context/TaskListContext";
import Taskform from "./Taskform";
import Header from "./Header";

const App = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <Taskform />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
};

export default App;

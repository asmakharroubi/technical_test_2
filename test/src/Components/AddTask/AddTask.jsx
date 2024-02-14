import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask } from "../../Redux/Actions/action";

const AddTask = () => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");
  const handleChange = (e) => {
    setNewTask(e.target.value);
    console.log(setNewTask, "change");
  };
  const handleSubmit = () => {
    dispatch(addTask(newTask));
    // console.log(newTask, "add")
    setNewTask("");
    console.log(setNewTask, "add");
  };
  return (
    <div className="add-task-container">
      <input
        type="text"
        placeholder="Enter the task you want"
        onChange={handleChange}
        value={newTask}
        className="add-task-input"
      />
      <Button onClick={handleSubmit} className="add-task-button">
        Add Task
      </Button>
    </div>
  );
};

export default AddTask;

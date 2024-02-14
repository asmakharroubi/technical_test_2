import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Task from "../Task/Task";
import { Button } from "react-bootstrap";
import { changeDone } from "../../Redux/Actions/action";
import "./ListTask.css";

const ListTask = () => {
  const toDoList = useSelector((state) => state.TodoReducer.listTodo);
  const dispatch = useDispatch();
  const [list, setList] = useState([]);

  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);

  useEffect(() => {
    handleList();
  }, [done, notDone, toDoList]);

  const handleList = () => {
    if (done) {
      setList(toDoList.filter((task) => task.isDone === true));
    } else if (notDone) {
      setList(toDoList.filter((task) => task.isDone === false));
    } else {
      setList(toDoList);
    }
  };

  

  const handleDone = () => {
    setDone(true);
    setNotDone(false);
  };

  const handleNotDone = () => {
    setDone(false);
    setNotDone(true);
  };

  const handleReset = () => {
    setDone(false);
    setNotDone(false);
    dispatch(changeDone());
  };

  return (
    <div>
      <div className="Filters">
        <Button variant="secondary" onClick={handleDone}>
          Filter by incompleted tasks
        </Button>
        <Button variant="secondary" onClick={handleNotDone}>
          Filter by completed tasks
        </Button>
        <Button variant="secondary" onClick={handleReset}>
          Reset
        </Button>
      </div>
      
       <div className="text">       
      {list.map((taskdetails, key) => (
        <Task taskdetails={taskdetails} key={key} />
      ))}
      </div>
    </div>
  );
};

export default ListTask;

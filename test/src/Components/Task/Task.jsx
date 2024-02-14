import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changeDone, editTask, deleteTask } from "../../Redux/Actions/action";
import "./Task.css";

const Task = ({ taskdetails }) => {
  const dispatch = useDispatch();
  const [edited, setEdited] = useState("");
  const [show, setShow] = useState(false);

  const handleDone = () => {
    dispatch(changeDone(taskdetails.id));
  };

  const handleEdit = (e) => {
    setEdited(e.target.value);
  };

  const handleSave = () => {
    dispatch(editTask({ id: taskdetails.id, edited }));
    handleClose();
  };

  const handleDelete = () => {
    dispatch(deleteTask(taskdetails.id));
    handleClose();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="boutons">
        <label className="description">{taskdetails.description}</label>
        {taskdetails.isDone ? (
          <Button
            className="bouton"
            variant="outline-danger"
            onClick={handleDone}
          >
            Uncompleted
          </Button>
        ) : (
          <Button
            className="bouton"
            variant="outline-success"
            onClick={handleDone}
          >
            Completed
          </Button>
        )}

        <Button
          className="bouton"
          variant="outline-warning"
          onClick={handleShow}
        >
          Edit
        </Button>

        <Button
          className="bouton"
          variant="outline-dark"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        className="modal-container"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Editing Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="task"
            placeholder="Edit task"
            defaultValue={taskdetails.description}
            onChange={handleEdit}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Task;
import { v4 as uuidv4 } from "uuid";
import { ADD_TASK, CHANGE_DONE, EDIT_TASK,DELETE_TASK } from "../Constants/action-types";

const initialState = {
  listTodo: [
    { id: uuidv4(), description: "Finish my work", isDone: false },
    { id: uuidv4(), description: "Checking my emails", isDone: false },
    { id: uuidv4(), description: "Going out", isDone: false },
    { id: uuidv4(), description: "Watching a movie", isDone: false },
    { id: uuidv4(), description: "Meeting my friends", isDone: false },
  ],
};
function TodoReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_TASK:
      return {
        listTodo: [
          ...state.listTodo,
          { id: uuidv4(), description: payload, isDone: false },
        ],
      };
    case CHANGE_DONE:
      return {
        listTodo: state.listTodo.map((task) =>
          task.id === payload ? { ...task, isDone: !task.isDone } : task
        ),
      };
    case EDIT_TASK:
      return {
        listTodo: state.listTodo.map((task) =>
          task.id === payload.id
            ? { ...task, description: payload.edited }
            : task
        ),
      };

      case DELETE_TASK:
      return {
        listTodo: state.listTodo.filter((task) =>
          task.id !== payload
            
        ),
      };

    default:
      return state;
  }
}
export default TodoReducer;

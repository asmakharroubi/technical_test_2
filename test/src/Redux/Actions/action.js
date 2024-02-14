import {
  ADD_TASK,
  CHANGE_DONE,
  EDIT_TASK,
  DELETE_TASK,
} from "../Constants/action-types";

export const addTask = (payload)=>{
    return{
        type : ADD_TASK,
        payload:payload,
}
}
export const changeDone = (payload)=>{
    return{
        type:CHANGE_DONE,
        payload:payload,
    }
}
export const editTask = (payload) => {
  return {
    type: EDIT_TASK,
    payload: payload,
  };
};

export const deleteTask = (payload) => {
  return {
    type: DELETE_TASK, 
    payload: payload,
  };
};
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import ListTask from "./ListTask";
import configureStore from "redux-mock-store";


jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe("ListTask Component", () => {
  
  const mockStore = configureStore([]);

  test("render ListTask component", () => {
    const initialState = {
      TodoReducer: {
        listTodo: [
          { id: 1, description: "Task 1", isDone: false },
          { id: 2, description: "Task 2", isDone: true },
        ],
      },
    };
    const store = mockStore(initialState);

    const { getByText } = render(
      <Provider store={store}>
        <ListTask />
      </Provider>
    );

    expect(getByText("Filter by incompleted tasks")).toBeInTheDocument();
    expect(getByText("Filter by completed tasks")).toBeInTheDocument();
    expect(getByText("Reset")).toBeInTheDocument();
    expect(getByText("Task 1")).toBeInTheDocument();
    expect(getByText("Task 2")).toBeInTheDocument();
  });

});

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AddTask from "./AddTask";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

describe("AddTask Component", () => {
  const mockStore = configureStore([]);

  test("render AddTask component", () => {
    const store = mockStore({});
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <AddTask />
      </Provider>
    );

    expect(getByPlaceholderText("Enter the task you want")).toBeInTheDocument();
    expect(getByText("Add Task")).toBeInTheDocument();
  });

  test("input change event", () => {
    const store = mockStore({});
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <AddTask />
      </Provider>
    );

    fireEvent.change(getByPlaceholderText("Enter the task you want"), {
      target: { value: "New Task" },
    });

    expect(getByPlaceholderText("Enter the task you want").value).toBe(
      "New Task"
    );
  });

  test("submit event", () => {
    const dispatch = jest.fn();
    jest.mock("react-redux", () => ({
      ...jest.requireActual("react-redux"),
      useDispatch: () => dispatch,
    }));

    const store = mockStore({});
    const { getByText } = render(
      <Provider store={store}>
        <AddTask />
      </Provider>
    );

    fireEvent.click(getByText("Add Task"));

    expect(dispatch).toHaveBeenCalledWith({ type: "ADD_TASK", payload: "" });
  });

  
});


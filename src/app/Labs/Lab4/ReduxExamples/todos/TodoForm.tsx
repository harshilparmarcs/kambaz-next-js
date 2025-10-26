"use client";

import { ListGroupItem, Button, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
  const todo = useSelector((state: any) => state.todosReducer?.todo ?? { title: "" });
  const dispatch = useDispatch();

  return (
    <ListGroupItem>
      <Button
        onClick={() => dispatch(addTodo(todo))}
        className="btn btn-success"
      >
        Add
      </Button>{" "}
      <Button
        onClick={() => dispatch(updateTodo(todo))}
        className="btn btn-warning"
      >
        Update
      </Button>
      <br />
      <FormControl
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
      />
    </ListGroupItem>
  );
}

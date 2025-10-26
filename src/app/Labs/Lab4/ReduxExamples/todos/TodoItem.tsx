"use client";

import { ListGroupItem, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

interface Todo {
  id: string;
  title: string;
}

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useDispatch();

  return (
    <ListGroupItem key={todo.id}>
      {todo.title}{" "}
      <Button
        onClick={() => dispatch(setTodo(todo))}
        className="btn btn-primary"
      >
        Edit
      </Button>{" "}
      <Button
        onClick={() => dispatch(deleteTodo(todo.id))}
        className="btn btn-danger"
      >
        Delete
      </Button>
    </ListGroupItem>
  );
}



"use client";

import { useState } from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function ArrayStateVariable() {
  const todos = useSelector((state: any) => state.todosReducer?.todos ?? []);
  const [array, setArray] = useState([1, 2, 3, 4, 5]);

  const addElement = () => setArray([...array, Math.floor(Math.random() * 100)]);
  const deleteElement = (index: number) =>
    setArray(array.filter((_, i) => i !== index));

  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <Button onClick={addElement} className="btn btn-success">
        Add Element
      </Button>
      <br />
      <br />
      <ListGroup>
        {array.map((item, index) => (
          <ListGroupItem key={index}>
            {item}{" "}
            <Button
              onClick={() => deleteElement(index)}
              className="btn btn-danger"
            >
              Delete
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
      <hr />
      <ListGroup>
        {todos.map((todo: any) => (
          <ListGroupItem key={todo.id}>{todo.title}</ListGroupItem>
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}

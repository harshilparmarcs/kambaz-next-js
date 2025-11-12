
"use client";

import React, { useEffect, useState } from "react";
import * as client from "./client";
import { FormControl } from "react-bootstrap";
export default function WorkingWithObjectsAsynchronously() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [assignment, setAssignment] = useState<any>({});
  const [todos, setTodos] = useState<any[]>([]);
  
  const editTodo = (todo: any) => {
    const updatedTodos = todos.map(
      (t) => t.id === todo.id ? { ...todo, editing: true } : t );
    setTodos(updatedTodos);
  };
  
  const updateTodo = async (todo: any) => {
    try {
      await client.updateTodo(todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
    }
  };

  const deleteTodo = async (todo: any) => {
    try{
      await client.deleteTodo(todo);
      const newTodos = todos.filter((t) => t.id !== todo.id);
      setTodos(newTodos);
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  
  const fetchAssignment = async () => {
    const assignment = await client.fetchAssignment();
    setAssignment(assignment);
  };

  const updateTitle = async (title: string) => {
    const updatedAssignment = await client.updateTitle(title);
    setAssignment(updatedAssignment);
  };

  useEffect(() => {
    fetchAssignment();
  }, []);
  return (
    <div id="wd-asynchronous-objects">
      <h3>Working with Objects Asynchronously</h3>
      <h4>Assignment</h4>
      <FormControl defaultValue={assignment.title} className="mb-2"
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value }) } />
      <FormControl as="textarea"rows={3} defaultValue={assignment.description} className="mb-2"
        onChange={(e) => setAssignment({ ...assignment, description: e.target.value }) }/>
      <FormControl type="date" className="mb-2" defaultValue={assignment.due}
        onChange={(e) => setAssignment({ ...assignment, due: e.target.value })} />
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" id="wd-completed"
               defaultChecked={assignment.completed}
          onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked }) } />
        <label className="form-check-label" htmlFor="wd-completed"> Completed </label>
      </div>

      <button className="btn btn-primary me-2" onClick={() => updateTitle(assignment.title)} >
        Update Title
      </button>
      
      <pre>{JSON.stringify(assignment, null, 2)}</pre>
      <hr />
    </div>
);}

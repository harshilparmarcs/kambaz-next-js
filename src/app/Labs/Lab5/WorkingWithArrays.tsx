
"use client";

import React, {useState} from "react";
import { FormControl } from "react-bootstrap";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function WorkingWithArrays() {
  const API = `${HTTP_SERVER}/lab5/todos`;

  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });

  return (
    <div id="wd-working-with-arrays">
      <h3>Working With Arrays</h3>

      <h4>Creating new Items in an Array</h4>
      <a id="wd-retrieve-completed-todos" className="btn btn-primary"
        href={`${API}/create`}>
        Create Todo
      </a><hr/>

      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
        Get Todos
      </a><hr/>

      <h4>Retrieving Array Item by Index</h4>
      <a id="wd-retrieve-todo-by-index" className="btn btn-primary" href={`${API}/${todo.id}`}>
      Get Todo by ID
      </a>
      <FormControl id="wd-todo-id" defaultValue={todo.id} className="w-50" 
      onChange={(e) => setTodo({ ...todo, id: e.target.value })}/>
      <hr />

      <h4>Filtering Array Items</h4>
      <a id="wd-retrieve-completed-todos" className="btn btn-primary"
      href={`${API}?completed=true`}>
        Get Completed Todos
      </a> &nbsp;&nbsp;

      <a id="wd-retrieve-completed-todos" className="btn btn-primary float"
      href={`${API}?completed=false`}>
        Get Incomplete Todos
      </a><hr/>

      <h4>Removing from an Array</h4>
      <a id="wd-remove-todo" className="btn btn-primary float-end" href={`${API}/${todo.id}/delete`}>
        Remove Todo with ID = {todo.id} </a>
      <FormControl defaultValue={todo.id} className="w-50" onChange={(e) => setTodo({ ...todo, id: e.target.value })}/><hr/>

      <h4>Updating an Item in an Array</h4>
      <a href={`${API}/${todo.id}/title/${todo.title}`} className="btn btn-primary float-end">
        Update Todo</a>
      <FormControl defaultValue={todo.id} className="w-25 float-start me-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}/>
      <FormControl defaultValue={todo.title} className="w-50 float-start"
             onChange={(e) => setTodo({ ...todo, title: e.target.value }) }/>
      <br /><br /><hr />

      <h4>Updating an Item Description in an Array</h4>
      <a href={`${API}/${todo.id}/description/${todo.description}`} className="btn btn-primary float-end">
        Update Todo Description</a>
      <FormControl defaultValue={todo.id} className="w-25 float-start me-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}/>
      <FormControl defaultValue={todo.description} className="w-50 float-start"
             onChange={(e) => setTodo({ ...todo, description: e.target.value }) }/>
      <br /><br /><br /><hr />

      <h4>Updating an Item Completed Status in an Array</h4>
      <a href={`${API}/${todo.id}/completed/${todo.completed}`} className="btn btn-primary float-end">
        Update Todo Completed Status</a>
      <FormControl defaultValue={todo.id} className="w-25 float-start me-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}/>

      <input 
        className="form-check-input ms-3 float-start"
        id="wd-todo-completed"
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => setTodo({ ...todo, completed: e.target.checked})}/>
      <label className="form-check-label ms-2 float-start" htmlFor="wd-todo-completed">
        Completed
      </label>
      <br /><br /><hr />




    </div>
  );
}
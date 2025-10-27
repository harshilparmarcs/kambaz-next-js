"use client";


import dynamic from "next/dynamic";
import { Provider, useSelector } from "react-redux";
import store from "../store/";
import CounterRedux from "./CounterRedux/page";

const TodoList = dynamic(() => import("./todos/TodoList"), { ssr: false });

export default function ReduxExamples() {
  const { message } = useSelector((state: any) => state.helloReducer);
  return (
    <Provider store={store}>
      <div id="wd-redux-examples">
        <h2>Redux Examples</h2>
        <h3>Hello Redux</h3>
        <h4>{message}</h4> <hr />
        <CounterRedux />
        <TodoList />
        <hr />
      </div>
    </Provider>
  );
}

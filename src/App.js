import React, { useState, useEffect } from "react";
import "./styles.css";
import Header from "./components/Header.js";
import Form from "./components/form.js";
import TodosList from "./components/TodosList.js";

export default function App() {
  const intialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(intialState);
  const [edittodos, setEdittodos] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <Header />

        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          edittodos={edittodos}
          setEdittodos={setEdittodos}
        />
        <TodosList
          todos={todos}
          setTodos={setTodos}
          setEdittodos={setEdittodos}
        />
      </div>
    </div>
  );
}

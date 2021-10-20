import React, { useState } from "react"
import Header from './Header';
import Footer from './Footer';
import Intro from './Intro';
import TodoSection from "./TodoSection";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTask = (value) => {
    if (value) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: value
      }
      setTodos([...todos, newItem])
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const sortTask = () => {
    const sorted = todos.sort((a, b) => a.task - b.task);
    setTodos([...sorted]);
  }

  return (
    <div className="main-container">
      <Header addTask={addTask} sortTask={sortTask} />
      <TodoSection removeTask={removeTask} todos={todos} />
      <Footer />
      <Intro />
    </div>
  )
}

export default TodoList;

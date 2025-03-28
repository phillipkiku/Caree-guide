// import React from "
import TodoItem from "/TodoItem";
import { React,useState } from "react";
import "../styles/TodoList.css";

function TodoList() {
  const [tasks, setTasks] = useState([]);

  const [text, setText] = useState("");
  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText("");
  }
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  }
  return (
    <div className="todolist">
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => addTask(text)}>Add</button>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
      {/* <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => addTask(text)}>Add</button> */}
    </div>
  );
}
export default TodoList;

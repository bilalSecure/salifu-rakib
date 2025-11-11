import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

 
  const addTask = () => {
    if (text === "") return;
    const newTask = { text: text, done: false };
    setTasks([...tasks, newTask]);
    setText("");
  };

  
  const toggleDone = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  
  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  
  const remaining = tasks.filter((t) => !t.done).length;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>My To-Do List</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ margin: "10px 0" }}>
            <span
              onClick={() => toggleDone(index)}
              style={{
                textDecoration: task.done ? "line-through" : "none",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>

      <p>Remaining tasks: {remaining}</p>
    </div>
  );
}

export default App;

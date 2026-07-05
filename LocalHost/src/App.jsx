import { useState, useRef, useEffect } from "react";
import { tasks } from "./tasks/tasks.js";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [checkedIds, setCheckedIds] = useState([]);

  const nameRef = useRef(null);

  useEffect(() => {
    const savedIds =
      JSON.parse(localStorage.getItem("checkedIds")) || [];

    const savedName =
      localStorage.getItem("name") || "";

    setCheckedIds(savedIds);
    setName(savedName);

    nameRef.current?.focus();
  }, []);

  const handleChange = (id) => {
    const updated = checkedIds.includes(id)
      ? checkedIds.filter((item) => item !== id)
      : [...checkedIds, id];

    setCheckedIds(updated);

    localStorage.setItem(
      "checkedIds",
      JSON.stringify(updated)
    );
  };

  const saveName = () => {
    const currentName = nameRef.current.value;

    setName(currentName);

    localStorage.setItem(
      "name",
      currentName
    );
  };
  return (
    <div className="container">
      <h1>Welcome {name}</h1>

      <label htmlFor="name">
        Enter your name:
      </label>

      <input
        type="text"
        id="name"
        placeholder="Your name here"
        ref={nameRef}
        defaultValue={name}
      />

      <button onClick={saveName}>
        Submit Name
      </button>

      <div className="tasks">
        <h2>Tasks</h2>

        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <input
                type="checkbox"
                id={`task-${task.id}`}
                checked={checkedIds.includes(task.id)}
                onChange={() =>
                  handleChange(task.id)
                }
              />

              <label htmlFor={`task-${task.id}`}>
                {task.title}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
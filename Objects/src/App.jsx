import { useEffect, useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const ref = useRef();
  const [tasks, setTasks] = useState([]);
  const [completed, setCompleted] = useState([]);
  const date = new Date();
  const completedCount = tasks.filter(task => completed.includes(task.id)).length;
  const toDoCount = tasks.length - completedCount;

  useEffect(() => {
    const saved_tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const saved_completed = JSON.parse(localStorage.getItem('completed')) || [];
    setTasks(saved_tasks);
    setCompleted(saved_completed);
  }, [])

  const addTask = () => {
    const task = ref.current.value.trim();
    if (!task) {
      return toast.error("Enter a Valid Task");
    }
    const update = [
      ...tasks, {
        id: Date.now(),
        task: task,
        isCompleted: false,
        time: date.toLocaleTimeString(),
        Meridiem: date.getHours() >= 12 ? "PM" : "AM"
      }
    ]
    setTasks(update);
    localStorage.setItem("tasks", JSON.stringify(update));
    ref.current.value = "";
    toast.success("Task Updated Successfully ")
  }

  const removeOneTask = (id) => {
    const new_tasks = tasks.filter((task) => task.id !== id)
    setTasks(new_tasks)
    localStorage.setItem('tasks', JSON.stringify(new_tasks));

    const new_completed = completed.filter((item) => item !== id);
    setCompleted(new_completed);
    localStorage.setItem('completed', JSON.stringify(new_completed));

    toast.success('Task Deleted Successfully !!! ')
  }

  const removeTasks = (id) => {
    localStorage.removeItem('tasks');
    localStorage.removeItem('completed');
    localStorage.removeItem('todocount');
    localStorage.removeItem('completedcount');
    setTasks([]);
    setCompleted([]);
    toast.success('All Tasks Deleted Successfully !!! ')
  }

  const toggleCompleted = (id) => {
    const update = completed.includes(id)
      ? completed.filter((item) => item !== id)
      : [...completed, id];
    setCompleted(update);
    localStorage.setItem("completed", JSON.stringify(update));
  };
  return (
    <div className="container">
      <ToastContainer position="top-right" autoClose={2000} pauseOnHover={false} />

      <h1>Advanced Todo List</h1>

      <div className="todo-list">
        <div className="input-field">
          <input type="text" placeholder=" Enter Your Task..." ref={ref} onKeyUp={(e) => e.key === 'Enter' ? addTask() : null} />
          <button onClick={addTask}>Submit</button>
        </div>
        <div className="count-display">
          <span>{toDoCount}</span>
          <span>{completedCount}</span>
        </div>
        {
          tasks.length !== 0 ? (
            <div className="tasks">
              {
                tasks.map((task) => (
                  <div className="task" key={task.id} >
                    <div className="detail">
                      <h2>{task.task}</h2>
                      <small>{task.time} {task.Meridiem}</small>
                    </div>
                    <div className="delete" onClick={() => removeOneTask(task.id)}><i className="fas fa-trash"></i></div>
                    <div className={completed.includes(task.id) ? "complete completed" : "complete"} onClick={() => toggleCompleted(task.id)}><i className="fas fa-check"></i></div>
                  </div>
                ))
              }
              <div className="all-delete"><button onClick={removeTasks}>All Delete</button></div>
            </div>
          ) : <h2> No Tasks Yet !!! Start Your Day More Productive 🔥</h2>
        }
      </div>
    </div>
  );
}

export default App;

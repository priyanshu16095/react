import "./App.css";
import { useState } from "react";

function App() {
    const[todoList, setTodoList]  = useState([]);
    const[newTask, setNewTask] = useState("");

    const handleChange = (event) => {
        setNewTask(event.target.value)
    }
    const addTask = () => {
        const newTodoList = [...todoList, newTask]
        setTodoList(newTodoList)
    }
    const deleteTask = (taskName) => {
        setTodoList()
    }
    return (
        <div className="App">
            <div className="addTask">
              <input type="text" placeholder="Add task" onChange={handleChange} />
              <button onClick={addTask}>Add</button>
            </div>
            <div className="list">
                {todoList.map((task) => {
                    return (
                        <div className="task">
                            <h1>{task}</h1>
                            <button onClick={() => deleteTask(task)}>Remove</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default App
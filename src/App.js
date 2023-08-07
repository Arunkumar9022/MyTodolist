import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Task from "./Task";

function App() {
  const [todolist, setTodoList] = useState([]);

  const [newtask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addtask = (e) => {
    // type-1 way
    // const newTodolist = [...todolist, newtask];
    // setTodoList(newTodolist);

    // type-2 way
    setTodoList([...todolist, newtask]);

    const task = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
      taskname: newtask,
      completed: false,
    };
    setTodoList([...todolist, task]);
  };

  // const deleteTask = (taskname) => {

  // type-1 method
  // const newTodolist = todolist.filter((task) => {
  //   if (task === taskname) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // });
  // setTodoList(newTodolist)
  // };

  // type-2 method
  const deleteTask = (id) => {
    //  const newTodolist=todolist.filter((task)=>{
    //   return task !== taskname
    //  })
    //  setTodoList(newTodolist)
    setTodoList(todolist.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todolist.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return Task;
        }
      })
    );
  };
  return (
    <div className="App">
      <div className="addtask">
        <div>
          <input type="text" value={newtask} onChange={handleChange} />
          <button onClick={addtask}>Add Task</button>
        </div>
      </div>
      <div className="list">
        {todolist.map((task) => {
          return (
            <Task
              key={task.id}
              taskname={task.taskname}
              id={task.id}
              completed={task.completed}
              deletetask={deleteTask}
              completetask={completeTask}
            />
            // <div className="task">
            //   <h1>{task.taskname}</h1>
            //   <button onClick={() => deleteTask(task.id)}>X</button>
            // </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

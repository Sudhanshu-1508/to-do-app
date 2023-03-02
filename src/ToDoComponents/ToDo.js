import React, { useState } from "react";
import './style.css'

function ToDo() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  // How to add new item to the list
  const addToDo = (todo) => {
    const newToDo = {
        id:Math.random(),
      todo: todo
    };
    console.log(todo);

    const x = setList([...list, newToDo]);
    console.log(x);
    //how to clear inputbox after each input
    const y = setInput("");
    console.log(y);
  };

  return (
    <div className="main">
      <h2 className="heading">ToDo List</h2>
      <input
        className="input"
        type={"text"}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={() => addToDo(input)}>Add</button>
      <ul>
        {list.map((todo) =>(
            <li key={todo.id}>
            {todo.todo}
            <input type={"checkbox"} onClick ={()=>{}}></input>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;

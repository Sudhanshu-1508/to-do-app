import React, { useState } from "react";
import './style.css'

const main ={
 
  background: 'gray'
}

const heading = {
  color: 'red',
  fontSize:'60px'
}

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
    <div className="main" style={main}>
      <h2 className="heading" style={heading}>ToDo List</h2>
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

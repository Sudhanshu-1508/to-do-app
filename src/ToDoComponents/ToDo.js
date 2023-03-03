import React, { useState } from "react";
import './style.css'

function Validate(input){
  if(input ===''){
    alert("input cannot be empty")
    return false
  } else{
    return true
  }
}

function ToDo() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
//toggle status
  // How to add new item to the list
  const addToDo = (todo) => {
    const newToDo = {
      id:Math.random(),
      todo: todo,
      status:false
    };
    console.log(newToDo);
    

    const x = setList([...list, newToDo]);
    console.log(x);
    //how to clear inputbox after each input
    const y = setInput("");
    console.log(y);
  };

  const handleToggleComplete = (id) => {
    setList((list) =>
      list.map((todo) => {
        if (todo.id === id) {
          return { ...todo, status: !todo.status };
        }
        return todo;
      })
    );
  };

  return (
    <div className="main" >
      <h1 className="heading" >ToDo List</h1>
      <input 
        className="input"
        placeholder="Enter task"
        type={"text"}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      
      <button  className="bttn" onClick={() => {Validate(input); addToDo(input)}}>Add</button>      

      <ul  className="list">
        <ol type="1" className="list">
        {list.map((todo) => (
          <li
            key={todo.id}
            style={{ fontSize: '25px',
                    fontFamily: 'sans-serif',
                    color:'black',
              textDecoration: todo.status ? 'line-through' : 'none' }}
          >
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleComplete(todo.id)}
              />
              {todo.todo}
            </label>
          </li>
        ))}
        </ol>
      </ul>     
    </div>
  );
}

export default ToDo;
//text decoration: strikethrough
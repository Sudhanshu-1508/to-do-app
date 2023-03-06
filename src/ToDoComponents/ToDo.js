import React, { useEffect, useState } from "react";
import "./style.css";

function Validate(input) {
  console.log(input);
  if (input === "") {
    alert("input cannot be empty");
    return;
  }

}

const getData = () =>{
  let data = localStorage.getItem('list');
  console.log(data);

  if(data) {
    return JSON.parse(localStorage.getItem('list'));
  }
}

function ToDo() {
  const [list, setList] = useState([getData()]);
  const [input, setInput] = useState("");

  //localstorage

  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(list))
  }, [list]);
  //toggle status
  // How to add new item to the list
  const addToDo = (todo) => {
    //const result =Validate(input)
    //if(!result){
    //  return;
    //}
    const newToDo = {
      id: Math.random(),
      todo: todo,
      status: false,
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
    <div className="main">
      <h1 className="heading">To-Do List</h1>
      <input
        className="input"
        placeholder="Enter Task"
        type={"text"}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>

      <button
        className="bttn"
        onClick={() => {

          addToDo(input);
        }}
      >
        Add
      </button>

      <ul className="list">
        <ol type="1" className="list">
          {list.map((todo) => (
            <li
              key={todo.id}
              style={{
                fontSize: "25px",
                fontFamily: "sans-serif",
                color: "black",
                textDecoration: todo.status ? "line-through" : "none",
              }}
            >
              <label>
                <input
                  className="chkbox"
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

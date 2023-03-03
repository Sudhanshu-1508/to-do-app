import React, { useState } from "react";
import './style.css'
//
//const main ={
//  background: 'gray',
//  color:'white',
//}
//
const heading = {
  margin: 'auto',
  color: 'white',
  fontSize:'50px',
  alignItems:'center'
}

const input1 = {
  alignItems:'center',
  background:'powderblue',
  width:'60%'
}
const button1 = {
    paddingHorizontal: '8',
    paddingVertical: '6',
    borderRadius: '4',
    backgroundColor: 'oldlace',
    minWidth: '8%',
}

const chkbox ={
  height:'auto',
  borderRadius:'4'
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
      <h1 className="heading" style={heading}>ToDo List</h1>
      <input       
        className="input"
        style={input1}
        type={"text"}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      
      <button style={button1} onClick={() => addToDo(input)}>Add</button>      

      <ul>
        <ol type="1">
        {list.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.status ? 'line-through' : 'none' }}
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
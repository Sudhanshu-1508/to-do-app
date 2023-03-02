import React, { useState } from "react";


function ToDo() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addToDo = (todo) => {
    const newToDo = {
      id: Math.random(),
      todo: todo,
    };
    // How to add new item to the list
    setList([...list, newToDo]);

    //how to clear inputbox after each input
    setInput("");
  };

  return (
    <div>
      <h2>ToDo List</h2>
      <input
        type={"text"}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={() => addToDo(input)}>Add</button>
    </div>
  );
}

export default ToDo;

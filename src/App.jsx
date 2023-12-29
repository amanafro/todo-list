import { useState } from "react";
import Delete from "./assets/EpCircleClose.svg";

function App() {
  return (
    <main>
      <div className={"form"}>
        <TodoList />
      </div>
    </main>
  );
}

function TodoList() {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const AddToList = () => {
    if (newTodo.trim() !== "") {
      setTodo([...todo, newTodo.trim()]);
      setNewTodo("");
    }
  };

  const RemoveFromList = (index) => {
    const newArray = todo.filter((todo) => index !== index);
    setNewTodo(newArray);
  };

  return (
    <>
      <h2>Todo List!!</h2>
      <input
        type={"text"}
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <br />
      <button onClick={AddToList}>Add</button>
      <ul>
        <div>
          {todo.map((list, index) => (
            <div className={"list"}>
              <li key={index}>
                {list}{" "}
                <img
                  key={list}
                  src={Delete}
                  onClick={RemoveFromList}
                  alt={"close"}
                />
              </li>
            </div>
          ))}
        </div>
      </ul>
    </>
  );
}

export default App;

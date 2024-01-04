import { useState } from "react";
import Delete from "./assets/EpCircleClose.svg";

function App() {
  return (
    <main className={"grid place-items-center"}>
      <TodoList />
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

  const RemoveFromList = () => {
    setTodo((list) => list.filter((entry) => !entry));
  };

  const title = "Todo List!!";

  return (
    <div
      className={
        "bg-stone-500 p-5 mt-48 rounded-2xl shadow-2xl grid max-w-[90]"
      }
    >
      <h2
        className={
          "text-center text-4xl font-bold text-white font-title shadow-2xl"
        }
      >
        {title}
      </h2>
      <input
        className={"w-auto h-12 rounded-lg text-2xl"}
        type={"text"}
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <br />
      <button
        onClick={AddToList}
        className={
          "my-4 p-2 w-auto text-xl place-items-center rounded-lg bg-stone-200"
        }
      >
        Add
      </button>
      {todo.map((list, index) => (
        <li
          key={list}
          className={
            "decoration-0 flex justify-between align-middle w-auto text-2xl text-white p-2.5"
          }
        >
          {list}
          <img
            className={"pl-2.5"}
            key={list}
            src={Delete}
            onClick={RemoveFromList}
            alt={"close"}
          />
        </li>
      ))}
    </div>
  );
}

export default App;

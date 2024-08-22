import { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleInputChange(e) {
    setTodo(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setTodos((t) => [...t, todo]);
    setTodo("");
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input onChange={handleInputChange} value={todo} type="text" />
        <button type="submit">Add</button>
      </form>
      {todos}
    </div>
  );
}

export default Todo;

import { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");

  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  return (
    <div>
      <form action="">
        <input onChange={handleInputChange} value={todo} type="text" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Todo;

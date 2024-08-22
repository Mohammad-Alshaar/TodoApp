import { useState } from "react";
import PropTypes from "prop-types";
function Form(props) {
  const [todo, setTodo] = useState("");
  function handleInputChange(e) {
    setTodo(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.setTodos((t) => [...t, todo]);
    setTodo("");
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <input onChange={handleInputChange} value={todo} type="text" />
      <button type="submit">Add</button>
    </form>
  );
}
Form.propTypes = {
  setTodos: PropTypes.func,
};

export default Form;

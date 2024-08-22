import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./form.module.css";
function Form(props) {
  const [todo, setTodo] = useState({ name: "", done: false });
  function handleInputChange(e) {
    setTodo({ name: e.target.value, done: false });
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.setTodos((t) => [...t, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form className={styles.todoform} action="" onSubmit={handleSubmit}>
      <input
        className={styles.todoinput}
        onChange={handleInputChange}
        value={todo.name}
        type="text"
        placeholder="Enter Todo Item..."
      />
      <button className={styles.todoAdd} type="submit">
        Add
      </button>
    </form>
  );
}
Form.propTypes = {
  setTodos: PropTypes.func,
};

export default Form;

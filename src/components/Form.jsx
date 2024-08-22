import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./form.module.css";
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
    <form className={styles.todoform} action="" onSubmit={handleSubmit}>
      <input
        className={styles.todoinput}
        onChange={handleInputChange}
        value={todo}
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

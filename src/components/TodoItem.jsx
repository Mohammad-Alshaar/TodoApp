import PropTypes from "prop-types";
import styles from "./todoItem.module.css";
function TodoItem(props) {
  function handleDelete(item) {
    props.setTodos(props.todos.filter((todo) => item !== todo));
  }
  function handleClick(name) {
    const newArrays = props.todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    props.setTodos(newArrays);
    console.log(props.todos);
  }
  let className = props.item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <span
        style={{ cursor: "pointer" }}
        className={className}
        onClick={() => handleClick(props.item.name)}
      >
        {props.item.name}
      </span>
      <button
        onClick={() => handleDelete(props.item)}
        className={styles.deletebutton}
      >
        x
      </button>
    </div>
  );
}
TodoItem.propTypes = {
  item: PropTypes.object,
  todos: PropTypes.array,
  setTodos: PropTypes.func,
};
export default TodoItem;

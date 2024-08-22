import PropTypes from "prop-types";
import styles from "./todoItem.module.css";
function TodoItem(props) {
  function handleDelete(item) {
    props.setTodos(props.todos.filter((todo) => item !== todo));
  }
  return (
    <div className={styles.item}>
      {props.item}
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
  item: PropTypes.string,
  todos: PropTypes.array,
  setTodos: PropTypes.func,
};
export default TodoItem;

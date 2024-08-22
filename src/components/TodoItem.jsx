import PropTypes from "prop-types";
import styles from "./todoItem.module.css";
function TodoItem({ item }) {
  return (
    <div className={styles.item}>
      {item}
      <button onClick={handleDelete} className={styles.deletebutton}>
        x
      </button>
    </div>
  );
}
TodoItem.propTypes = {
  item: PropTypes.string,
};
export default TodoItem;

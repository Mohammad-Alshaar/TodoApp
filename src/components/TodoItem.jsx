import PropTypes from "prop-types";
function TodoItem({ item }) {
  return <h3>{item}</h3>;
}
TodoItem.propTypes = {
  item: PropTypes.string,
};
export default TodoItem;

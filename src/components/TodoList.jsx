import TodoItem from "./TodoItem";

function TodoList(props) {
  return props.todos.map((item, index) => <TodoItem item={item} key={index} />);
}

export default TodoList;

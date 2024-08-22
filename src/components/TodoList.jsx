import TodoItem from "./TodoItem";

function TodoList(props) {
  return props.todos.map((item, index) => (
    <TodoItem
      item={item}
      key={index}
      setTodos={props.setTodos}
      todos={props.todos}
    />
  ));
}

export default TodoList;

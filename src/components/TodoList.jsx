import TodoItem from "./TodoItem";

function TodoList(props) {
  const sortedTodos = props.todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));

  console.log(sortedTodos);

  return sortedTodos.map((item, index) => (
    <TodoItem
      item={item}
      key={index}
      setTodos={props.setTodos}
      todos={props.todos}
    />
  ));
}

export default TodoList;

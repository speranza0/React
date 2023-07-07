import ListTodoItem from "./ListTodoItem";

function ListTodo({ todoList, onCheck, onRemove }) {
  return (
    <div id="list-box">
      할 일 목록
      <ul id="todoList">
        {todoList.map((todoItem) => (
          <ListTodoItem
            key={todoItem.id}
            todoItem={todoItem}
            onCheck={onCheck}
            onRemove={onRemove}
          />
        ))}
      </ul>
    </div>
  );
}

export default ListTodo;

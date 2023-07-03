import FilterTodo from "../components/FilterTodo";
import ListTodo from "../components/ListTodo";
import { useAppState } from "../hooks/state";

function TodoListPage() {
  const { filterTodo, resetSearch, filterList, checkTodo, removeTodo } =
    useAppState();

  return (
    <div className="content-wrap">
      <FilterTodo filterTodo={filterTodo} resetSearch={resetSearch} />
      <ListTodo
        todoList={filterList}
        onCheck={checkTodo}
        onRemove={removeTodo}
      />
    </div>
  );
}

export default TodoListPage;

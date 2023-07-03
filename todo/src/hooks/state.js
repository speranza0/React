import { useRecoilState } from "recoil";
import { filterListState, indexState, todoListState } from "../store/appState";

// index, todoList, filterList
export function useAppState() {
  const [index, setIndex] = useRecoilState(indexState);

  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [filterList, setFilterList] = useRecoilState(filterListState);

  const filterTodo = (searchItem) => {
    const filterList = todoList.filter((todoItem) => {
      let isContain = true;

      if (!todoItem.content.includes(searchItem.query)) {
        isContain = false;
      }
      if (searchItem.condi === "todo" && todoItem.success) {
        isContain = false;
      }

      if (searchItem.condi === "success" && !todoItem.success) {
        isContain = false;
      }
      return isContain;
    });

    setFilterList(filterList);
  };

  const resetSearch = () => {
    setFilterList(todoList);
  };

  const createTodo = (todoItem) => {
    const newTodoList = [
      ...todoList,
      { ...todoItem, index: index, success: false },
    ];
    setIndex(index + 1);

    setTodoList(newTodoList);
    setFilterList(newTodoList);
  };

  const checkTodo = (index) => {
    const newTodoList = todoList.map((todoItem) => {
      if (todoItem.index !== index) {
        return todoItem;
      }
      return {
        ...todoItem,
        success: !todoItem.success,
      };
    });

    setTodoList(newTodoList);
    setFilterList(newTodoList);
  };

  // 삭제 상태 함수
  const removeTodo = (index) => {
    const newTodoList = todoList.filter((todoItem) => todoItem.index !== index);
    setTodoList(newTodoList);
    setFilterList(newTodoList);
  };

  return {
    index,
    todoList,
    filterList,
    filterTodo,
    createTodo,
    checkTodo,
    removeTodo,
    resetSearch,
  };
}

import FilterTodo from "../components/FilterTodo";
import ListTodo from "../components/ListTodo";
import { useAppState } from "../hooks/state";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import * as todoService from "../service/todo";
import { useEffect, useMemo, useState } from "react";

function TodoListPage() {
  const { filterTodo, resetSearch, filterList, checkTodo, removeTodo } =
    useAppState();

  const [searchItem, setSearchItem] = useState({
    query: "",
    condi: "",
  });

  const queryClient = useQueryClient();

  const { data: todos } = useQuery({
    queryKey: todoService.findAllQueryKey(searchItem),
    queryFn: () => todoService.search(searchItem),
  });

  const onCheck = async (id) => {
    await todoService.update(id);
    await queryClient.invalidateQueries(todoService.findOneQueryKey(id));
    await queryClient.invalidateQueries(todoService.findAllQueryKey);
  };

  const onRemove = async (id) => {
    const result = window.confirm("삭제하시겠습니까?");
    if (result) {
      await todoService.remove(id);
      await queryClient.invalidateQueries(todoService.findOneQueryKey(id));
      await queryClient.invalidateQueries(todoService.findAllQueryKey);

      alert("삭제 완료");
    }
  };

  if (!todos) return;

  return (
    <div className="content-wrap">
      <FilterTodo
        searchItem={searchItem}
        setSearchItem={setSearchItem}
        resetSearch={resetSearch}
      />
      <ListTodo todoList={todos} onCheck={onCheck} onRemove={onRemove} />
    </div>
  );
}

export default TodoListPage;

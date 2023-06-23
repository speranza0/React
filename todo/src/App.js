import React, { useState } from "react";

import CreateTodo from "./components/CreateTodo";
import FilterTodo from "./components/FilterTodo";
import ListTodo from "./components/ListTodo";

import "./assets/styles/style.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [filterList, setFilterList] = useState([]);

  const filterTodo = (query, condi) => {
    const filterList = todoList.filter((todoItem) => {
      let isContain = true;

      if (!todoItem.content.includes(query)) {
        isContain = false;
      }
      if (condi === "todo" && todoItem.success) {
        isContain = false;
      }

      if (condi === "success" && !todoItem.success) {
        isContain = false;
      }
      return isContain;
    });

    setFilterList(filterList);
  };

  const createTodo = (todoItem) => {
    const newTodoList = [...todoList, todoItem];

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

  return (
    <div className="div-wrap">
      <div className="header-wrap">
        <CreateTodo createTodo={createTodo} />
      </div>
      <div className="content-wrap">
        <FilterTodo filterTodo={filterTodo} />
        <ListTodo
          todoList={filterList}
          onCheck={checkTodo}
          onRemove={removeTodo}
        />
      </div>
    </div>
  );
}

export default App;

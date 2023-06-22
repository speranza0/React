import React, { useState, useRef, useEffect } from "react";
import "./components/style1.css";

function App() {
  // 상태값 변수
  const index = useRef(1);
  const [todoList, setTodoList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [todoItem, setTodoItem] = useState({
    index,
    content: "",
    success: false,
  });
  const [search, setSearch] = useState({ query: "", condi: "all" });
  const [input, setInput] = useState("");

  const { content, success } = todoItem;
  const { query, condi } = search;

  // search의 상태값을 변경하는 함수
  // 필터
  const onFilter = (e) => {
    const condi = e.target.value;
    setSearch({
      ...search,
      condi,
    });
  };

  // 검색
  const onQuery = (e) => {
    const query = e.target.value;
    setInput(query);
  };

  const onSearch = () => {
    setSearch({
      ...search,
      query: input,
    });
  };

  const clearSearch = () => {
    setSearch({
      query: "",
      condi: "all",
    });
    setInput("");
  };

  // todoItem의 상태값을 변경하는 함수
  const clearInput = () => {
    setTodoItem({
      content: "",
      success: false,
    });
  };

  const onInput = (e) => {
    const text = e.target.value;
    setTodoItem({
      content: text,
      success,
    });
  };

  // TodoList의 상태값을 변경하는 함수
  // 등록 상태 함수
  const onCreate = () => {
    if (!content) {
      alert("할일을 입력해주세요");
      return;
    }

    const addItem = {
      index: index.current,
      content,
      success,
    };
    setTodoList([...todoList, addItem]);

    // 초기화
    clearInput();
    clearSearch();

    index.current += 1;
  };

  // 체크 상태 함수
  const onCheck = (index) => {
    setTodoList(
      todoList.map((todoItem) => {
        if (todoItem.index !== index) {
          return todoItem;
        }
        return {
          ...todoItem,
          success: !todoItem.success,
        };
      })
    );
  };

  // 삭제 상태 함수
  const onRemove = (index) => {
    setTodoList(todoList.filter((todoItem) => todoItem.index !== index));
  };

  // 상태와 화면을 동기화해주는 함수
  // 조건에 맞게 처리
  // 화면에 렌더링
  useEffect(() => {
    setFilterList(
      todoList.filter((todoItem) => {
        let isContain = true;

        if (!todoItem.content.includes(search.query)) {
          isContain = false;
        }
        if (search.condi === "todo" && todoItem.success) {
          isContain = false;
        }

        if (search.condi === "success" && !todoItem.success) {
          isContain = false;
        }
        return isContain;
      })
    );
  }, [search.query, search.condi, todoList, success]);

  return (
    <div className="div-wrap">
      <div className="header-wrap">
        <div className="header-in">
          <input
            value={content}
            onChange={onInput}
            id="input"
            placeholder="할일을 입력해주세요"
          />
          <button id="submit" onClick={onCreate}>
            등록
          </button>
        </div>
      </div>
      <div className="content-wrap">
        <div className="filter">
          <input
            type="text"
            id="search"
            value={input}
            onChange={onQuery}
            placeholder="검색할 내용을 입력해주세요"
          />
          <button id="searchBtn" onClick={onSearch}>
            검색
          </button>
          검색 조건 :
          <select id="selectBox" onChange={onFilter} value={condi}>
            <option value="all">전체</option>
            <option value="todo">할일</option>
            <option value="success">완료</option>
          </select>
        </div>
        <div id="list-box">
          할 일 목록
          <ul id="todoList">
            {filterList.map((listItem) => (
              <li
                key={listItem.index}
                style={{ textDecoration: listItem.success && "line-through" }}
              >
                <input
                  type="checkbox"
                  checked={listItem.success}
                  onChange={() => onCheck(listItem.index)}
                />
                {listItem.content}
                <button onClick={() => onRemove(listItem.index)}>삭제</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

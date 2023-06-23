import { useInput, useSelect } from "../hooks/control";

function FilterTodo({ filterTodo }) {
  const [query, onChangeQuery] = useInput("");
  const [condi, onChangeCondi] = useSelect("all");

  const onSearh = () => {
    filterTodo(query, condi);
  };

  return (
    <div className="filter">
      <input
        type="text"
        id="search"
        value={query}
        onChange={onChangeQuery}
        placeholder="검색할 내용을 입력해주세요"
      />
      <button id="searchBtn" onClick={onSearh}>
        검색
      </button>
      검색 조건 :
      <select
        id="selectBox"
        onChange={(event) => {
          onChangeCondi(event);
          filterTodo(query, event.target.value);
        }}
        value={condi}
      >
        <option value="all">전체</option>
        <option value="todo">할일</option>
        <option value="success">완료</option>
      </select>
    </div>
  );
}

export default FilterTodo;

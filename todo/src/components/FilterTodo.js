import { useEffect } from "react";
import { useInput, useSelect } from "../hooks/control";
import { Controller, useForm } from "react-hook-form";

function FilterTodo({ filterTodo, resetSearch }) {
  // const [query, onChangeQuery] = useInput("");
  // const [condi, onChangeCondi] = useSelect("all");

  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (!data.query) {
      data.query = "";
    }
    filterTodo(data);
  };

  const onError = (error) => {
    const errorKey = Object.keys(error);
    for (const key of errorKey) {
      alert(error[key].message);
      break;
    }
  };

  useEffect(() => {
    return () => {
      resetSearch();
    };
  }, []);

  // const onSearch = () => {
  //   filterTodo(query, condi);
  // };

  return (
    <div className="filter">
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <Controller
          name="query"
          control={control}
          render={({ field }) => (
            <input
              id="search"
              type="text"
              placeholder="검색할 내용을 입력해주세요"
              {...field}
            />
          )}
        />
        <button id="searchBtn" type="submit">
          검색
        </button>
        검색 조건 :
        <Controller
          name="condi"
          control={control}
          render={({ field }) => (
            <select
              id="selectBox"
              {...field}
              onChange={(event) => {
                field.onChange(event.target.value);
                handleSubmit(onSubmit, onError)();
              }}
            >
              <option value="all">전체</option>
              <option value="todo">할일</option>
              <option value="success">완료</option>
            </select>
          )}
        />
        {/* <select
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
        </select> */}
      </form>
    </div>
  );
}

export default FilterTodo;

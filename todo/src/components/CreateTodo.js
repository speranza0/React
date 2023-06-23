import { useRef } from "react";
import { useInput } from "../hooks/control";

function CreateTodo({ createTodo }) {
  const index = useRef(1);
  const [content, onChangeContent, resetContent] = useInput("");

  const onCreate = () => {
    if (!content) {
      alert("할일을 입력해주세요");
      return;
    }

    const addItem = {
      index: index.current,
      content,
      success: false,
    };

    createTodo(addItem);

    // 초기화
    resetContent();

    index.current += 1;
  };

  return (
    <div className="header-in">
      <input
        value={content}
        onChange={onChangeContent}
        id="input"
        placeholder="할일을 입력해주세요"
      />
      <button id="submit" onClick={onCreate}>
        등록
      </button>
    </div>
  );
}

export default CreateTodo;

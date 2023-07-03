import { useInput } from "../hooks/control";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../hooks/state";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Controller, useForm } from "react-hook-form";

const schema = yup.object({
  content: yup.string().required("할일을 입력해주세요."),
});

function CreateTodo() {
  const { createTodo } = useAppState();

  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  // const [content, onChangeContent, resetContent] = useInput("");

  const onSubmit = (data) => {
    createTodo(data);
    navigate("/");
  };

  const onError = (error) => {
    const errorKey = Object.keys(error);
    for (const key of errorKey) {
      alert(error[key].message);
      break;
    }
  };

  // const onCreate = () => {
  //   if (!content) {
  //     alert("할일을 입력해주세요");
  //     return;
  //   }

  //   const addItem = {
  //     content,
  //     success: false,
  //   };

  //   createTodo(addItem);

  //   // 초기화
  //   resetContent();
  //   navigate("/");
  // };

  return (
    <div className="header-in">
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <input
              id="input"
              type="text"
              placeholder="할일을 입력해주세요"
              {...field}
            />
          )}
        />
        <button type="submit">등록</button>
      </form>
    </div>
  );

  // return (
  //   <div className="header-in">
  //     <input
  //       value={content}
  //       onChange={onChangeContent}
  //       id="input"
  //       placeholder="할일을 입력해주세요"
  //     />
  //     <button id="submit" onClick={onCreate}>
  //       등록
  //     </button>
  //   </div>
  // );
}

export default CreateTodo;

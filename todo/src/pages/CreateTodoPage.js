import CreateTodo from "../components/CreateTodo";
import { useAppState } from "../hooks/state";

function CreateTodoPage() {
  const { todoList } = useAppState();

  return (
    <>
      <div className="header-wrap">
        <CreateTodo />
      </div>
      <br />
      <div style={{ textAlign: "center" }}>
        현재 등록된 할일 갯수는 {todoList.length} 입니다.
      </div>
    </>
  );
}

export default CreateTodoPage;

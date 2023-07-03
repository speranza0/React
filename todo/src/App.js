import React from "react";

import { Route, Routes } from "react-router-dom";
import TodoListPage from "./pages/TodoListPage";
import CreateTodoPage from "./pages/CreateTodoPage";
import AppLayout from "./components/AppLayout";

import "./assets/styles/style.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/create" element={<CreateTodoPage />} />
        <Route index element={<TodoListPage />} />
      </Route>
      <Route path="*" element={<>페이지를 찾을수 없습니다.</>} />
    </Routes>
  );
}

export default App;

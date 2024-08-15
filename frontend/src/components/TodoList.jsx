import React from "react";
import List from "@mui/material/List";
import { styled } from "@mui/system";
import TodoItem from "./TodoItem";
import { useTodos } from "../context/TodoContext";

const StyledList = styled(List)(({ theme }) => ({
  marginTop: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  overflowY: "auto",
  width: "100%",
  maxHeight: "60vh",
}));

function TodoList() {
  const { todos } = useTodos();

  return (
    <StyledList>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </StyledList>
  );
}

export default TodoList;

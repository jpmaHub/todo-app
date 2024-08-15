import React from "react";
import { Container as MuiContainer } from "@mui/material";
import { styled } from "@mui/system";
import Title from "./Title";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";

const StyledContainer = styled(MuiContainer)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: "#f4f4f4",
  display: "flex",
  flexDirection: "column",
  height: "90vh",
  width: "100vw",
}));

function TodoApp() {
  return (
    <StyledContainer maxWidth="sm">
      <Title />
      <CreateTodo />
      <TodoList />
    </StyledContainer>
  );
}

export default TodoApp;

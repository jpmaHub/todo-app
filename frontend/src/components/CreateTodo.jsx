import React, { useState } from "react";
import { TextField, Button, Grid, FormHelperText } from "@mui/material";
import { useTodos } from "../context/TodoContext";
import { styled } from "@mui/system";

const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const ErrorText = styled(FormHelperText)(({ theme }) => ({
  color: theme.palette.error.main,
  textAlign: "left",
}));

function CreateTodo() {
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [error, setError] = useState("");
  const { addTodoTask } = useTodos();

  const handleAddTodo = () => {
    if (!newTodoTitle.trim()) {
      setError("Todo title cannot be empty");
    } else {
      addTodoTask(newTodoTitle);
      setNewTodoTitle("");
      setError("");
    }
  };

  return (
    <Grid container paddingTop={2} spacing={2} justifyContent="center">
      <Grid item xs={12} lg={9}>
        <StyledTextField
          fullWidth
          variant="outlined"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
          placeholder="New todo"
          error={Boolean(error)}
        />
      </Grid>
      <Grid item xs={12} lg={3}>
        <StyledButton
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleAddTodo}
        >
          Add Todo
        </StyledButton>
      </Grid>
      <Grid item xs={12}>
        {error && <ErrorText>{error}</ErrorText>}
      </Grid>
    </Grid>
  );
}

export default CreateTodo;

import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import { useTodos } from "../context/TodoContext";

function TodoItem({ todo }) {
  const { updateTodoTask, deleteTodoFromList } = useTodos();
  const [currentEditTitle, setCurrentEditTitle] = useState(todo.title);
  const [isEditing, setIsEditing] = useState(false);

  const startEditing = () => setIsEditing(true);
  const stopEditing = () => setIsEditing(false);

  const handleUpdate = () => {
    if (currentEditTitle.trim()) {
      updateTodoTask(todo.id, currentEditTitle, todo.completed);
      stopEditing();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleUpdate();
    }
  };

  return (
    <ListItem>
      <ListItemButton role={undefined} dense>
        <Switch
          edge="start"
          checked={todo.completed}
          tabIndex={-1}
          disableRipple
          onChange={() => updateTodoTask(todo.id, todo.title, !todo.completed)}
        />

        {isEditing ? (
          <TextField
            fullWidth
            value={currentEditTitle}
            onChange={(e) => setCurrentEditTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleUpdate}
            autoFocus
          />
        ) : (
          <ListItemText
            primary={todo.title}
            onClick={startEditing}
            sx={{ textDecoration: todo.completed ? "line-through" : "none" }}
          />
        )}
      </ListItemButton>

      <IconButton
        edge="end"
        aria-label="delete"
        onClick={() => deleteTodoFromList(todo.id)}
      >
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
}

export default TodoItem;

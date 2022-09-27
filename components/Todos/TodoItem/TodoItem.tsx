import React from "react";
import { ITodoItem } from "../Todo.types";
import { Box, Check, ItemLabel, ItemText } from "./TodoItem.styles";

export const TodoItem = ({
  todo,
  handleToggle,
}: {
  todo: ITodoItem;
  handleToggle: any;
}) => {
  return (
    <ItemLabel key={todo.id}>
      <Check
        type="checkbox"
        checked={todo.done}
        onChange={() => handleToggle(todo.id)}
      />
      <Box></Box>
      <ItemText>{todo.text}</ItemText>
    </ItemLabel>
  );
};

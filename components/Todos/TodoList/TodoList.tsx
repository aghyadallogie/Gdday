import React, { useEffect, useRef, useState } from "react";
import { TodoItem } from "../TodoItem/TodoItem";
import { ITodoItem } from "../Todo.types";
import {
  Border,
  Caption,
  FunnelIcon,
  InputField,
  InputText,
  List,
  ListHead,
  ListContainer,
} from "./TodoList.styles";

export const TodoList = () => {
  const [todos, setTodos] = useState<ITodoItem[]>([]);
  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    const storedTodos = localStorage.getItem("LOCAL-TODO-LIST");
    if (storedTodos) setTodos(JSON.parse(storedTodos));
  }, []);

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputRef.current?.value) return alert("please type a todo text");

    const newTodo = {
      id: Date.now(),
      text: inputRef.current?.value,
      done: false,
    };

    if (inputRef.current?.value) {
      setTodos([newTodo, ...todos]);
      localStorage.setItem(
        "LOCAL-TODO-LIST",
        JSON.stringify([newTodo, ...todos])
      );
    }
    e.target.reset();
  };

  const handleFunnel = () => {
    const funneledTodos = todos.filter((todo) => !todo.done);
    setTodos(funneledTodos);
    localStorage.setItem("LOCAL-TODO-LIST", JSON.stringify(funneledTodos));
  };

  const handleToggle = (id: number) => {
    const targetIndex = todos
      .map((todo) => {
        return todo.id;
      })
      .indexOf(id);
    const targetTodo = todos.find((todo) => todo.id === id);
    let filteredTodos = todos.filter((todo) => todo.id !== id);
    if (targetTodo) {
      targetTodo.done = !targetTodo.done;
      filteredTodos.splice(targetIndex, 0, targetTodo);
    }
    setTodos(filteredTodos);
    localStorage.setItem("LOCAL-TODO-LIST", JSON.stringify(todos));
  };

  return (
    <ListContainer>
      <ListHead>
        <FunnelIcon
          onClick={handleFunnel}
          src="https://cdn3.iconfinder.com/data/icons/tango-icon-library/48/edit-clear-512.png"
        />
      </ListHead>
      <List onSubmit={handleAddTodo}>
        <InputField>
          <InputText
            ref={inputRef}
            type="text"
            name="input-text"
            autoComplete="off"
          />
          <Caption>What's on your mind ?</Caption>
          <Border />
        </InputField>
        {todos &&
          todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} handleToggle={handleToggle} />
          ))}
      </List>
    </ListContainer>
  );
};

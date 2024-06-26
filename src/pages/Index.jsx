import React, { useState } from "react";
import { Heading, UnorderedList, ListItem, Checkbox, Button, Flex, Input } from "@chakra-ui/react";

const Index = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Do laundry", completed: false },
    { id: 3, text: "Finish project", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
      const todo = { id: newId, text: newTodo, completed: false };
      setTodos([todo, ...todos]);
      setNewTodo("");
    }
  };

  React.useEffect(() => {
    document.title = "My Todos";
  }, []);

  return (
    <>
      <Heading>My Todo List</Heading>
      <Flex mt={4}>
        <Input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Enter a new todo" mr={2} />
        <Button onClick={addTodo}>Add Todo</Button>
      </Flex>
      <UnorderedList spacing={3} mt={4}>
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            <Flex align="center">
              <Checkbox
                isChecked={todo.completed}
                onChange={() => {
                  const updatedTodos = todos.map((t) => {
                    if (t.id === todo.id) {
                      return { ...t, completed: !t.completed };
                    }
                    return t;
                  });
                  setTodos(updatedTodos);
                }}
                mr={2}
              />
              {todo.text}
              <Button
                size="xs"
                ml={2}
                onClick={() => {
                  const updatedTodos = todos.filter((t) => t.id !== todo.id);
                  setTodos(updatedTodos);
                }}
              >
                Delete
              </Button>
            </Flex>
          </ListItem>
        ))}
      </UnorderedList>
    </>
  );
};

export default Index;

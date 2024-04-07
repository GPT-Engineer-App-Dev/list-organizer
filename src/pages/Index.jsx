import React, { useState } from "react";
import { Heading, UnorderedList, ListItem, Checkbox, Button, Flex } from "@chakra-ui/react";

const Index = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Do laundry", completed: false },
    { id: 3, text: "Finish project", completed: false },
  ]);

  React.useEffect(() => {
    document.title = "My Todos";
  }, []);

  return (
    <>
      <Heading>My Todo List</Heading>
      <UnorderedList spacing={3} mt={4}>
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            <Flex align="center">
              <Checkbox mr={2} />
              {todo.text}
              <Button size="xs" ml={2}>
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

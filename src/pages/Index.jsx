import React from "react";
import { Heading, UnorderedList, ListItem, Checkbox, Button, Flex } from "@chakra-ui/react";

const Index = () => {
  React.useEffect(() => {
    document.title = "My Todos";
  }, []);

  return (
    <>
      <Heading>My Todo List</Heading>
      <UnorderedList spacing={3} mt={4}>
        <ListItem>
          <Flex align="center">
            <Checkbox mr={2} />
            Buy groceries
            <Button size="xs" ml={2}>
              Delete
            </Button>
          </Flex>
        </ListItem>
        <ListItem>
          <Flex align="center">
            <Checkbox mr={2} />
            Do laundry
            <Button size="xs" ml={2}>
              Delete
            </Button>
          </Flex>
        </ListItem>
        <ListItem>
          <Flex align="center">
            <Checkbox mr={2} />
            Finish project
            <Button size="xs" ml={2}>
              Delete
            </Button>
          </Flex>
        </ListItem>
      </UnorderedList>
    </>
  );
};

export default Index;

import React from "react";
import { Heading, UnorderedList, ListItem } from "@chakra-ui/react";

const Index = () => {
  React.useEffect(() => {
    document.title = "My Todos";
  }, []);

  return (
    <>
      <Heading>My Todo List</Heading>
      <UnorderedList>
        <ListItem>Buy groceries</ListItem>
        <ListItem>Do laundry</ListItem>
        <ListItem>Finish project</ListItem>
      </UnorderedList>
    </>
  );
};

export default Index;

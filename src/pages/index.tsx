import type { NextPage } from "next";
import { Center } from "@chakra-ui/react";
import { Form } from "../components";

const Home: NextPage = () => {
  return (
    <Center
      w="100vw"
      h="100vh"
      backgroundColor="gray.200"
      pos="relative"
    >
      <Form />
    </Center>
  );
};

export default Home;

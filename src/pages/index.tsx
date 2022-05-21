import type { NextPage } from "next";
import { Form } from "../components/Form";
import { Center } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Center w="100vw" h="100vh" backgroundColor="gray.200" pos="relative">
      <Form formType="login" />
    </Center>
  );
};

export default Home;

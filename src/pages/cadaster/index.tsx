import type { NextPage } from "next";
import { Form } from "../../components";
import { Center, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Center w="100vw" h="100vh" backgroundColor="gray.200" pos="relative">
      <Form formType="cadaster"/>
    </Center>
  );
};

export default Home;

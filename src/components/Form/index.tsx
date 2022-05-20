import {
  Button,
  FormControl,
  Link as ChakraLink,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { FiUser, FiLock } from "react-icons/fi";
import { CircleComponent } from "../Circle";
import { FormInput } from "./FormInput";

export const Form = () => {
  const [spinnerIsLoading, setSpinnerIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    console.log("olá");
    setSpinnerIsLoading(true);
    e.preventDefault()
  };

  return (
    <FormControl as={"form"}
      onSubmit={handleSubmit}
      position={"relative"}
      w={"30%"}
      minWidth={"320px"}
      h={"60%"}
      backgroundColor="whiteAlpha.900"
      borderRadius={"base"}
    >
      <CircleComponent />
      <VStack spacing={"4"} mx="10%">
        <Text fontSize="1.8rem" mt="30%">
          Log in
        </Text>
        <FormInput placeholder="name" icon={FiUser} type="text" />
        <FormInput placeholder="password" icon={FiLock} type="password" />
        <Button
          isLoading={spinnerIsLoading}
          loadingText="Entrando"
          colorScheme={"blue"}
          variant={"solid"}
          w="80%"
          h="3.2rem"
          type="submit"
          borderRadius={"base"}
        >
          log in
        </Button>
        <Link href="/register" passHref>
          <ChakraLink
            color={"gray.500"}
            textDecoration="none"
            _hover={{ color: "gray.800" }}
          >
            create an account
          </ChakraLink>
        </Link>
      </VStack>
    </FormControl>
  );
};

import { Box, Button, FormControl, Text, VStack } from "@chakra-ui/react";
import { FiUser, FiLock } from "react-icons/fi";
import { CircleComponent } from "../Circle";
import { FormInput } from "./FormInput";

export const Form = () => {
  return (
    <FormControl
      position={"relative"}
      w={"30%"}
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
          colorScheme={"blue"}
          variant={"solid"}
          w="80%"
          h="3.2rem"
          type="submit"
          borderRadius={"base"}
        >
          log in
        </Button>
      </VStack>
    </FormControl>
  );
};

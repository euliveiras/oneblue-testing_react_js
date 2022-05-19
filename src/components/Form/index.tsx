import { Button, FormControl, Text, VStack } from "@chakra-ui/react";
import { NameInput } from "../NameInput";
import { PasswordInput } from "../PasswordInput.tsx";

export const Form = () => {
  return (
    <FormControl
      w={"30%"}
      h={"50%"}
      backgroundColor="whiteAlpha.900"
      borderRadius={"base"}
    >
      <VStack spacing={"4"} mt="10%" mx="10%">
        <Text fontSize="1.8rem">Log in</Text>
        <NameInput />
        <PasswordInput />
        <Button
          background={"blue.300"}
          color={"whiteAlpha.900"}
          variant={"unstyled"}
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

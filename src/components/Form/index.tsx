import { Box, Button, FormControl, Text, VStack } from "@chakra-ui/react";
import { NameInput } from "../NameInput";
import { PasswordInput } from "../PasswordInput.tsx";

export const Form = () => {
  return (
    <FormControl
      position={"relative"}
      w={"30%"}
      h={"60%"}
      backgroundColor="whiteAlpha.900"
      borderRadius={"base"}
    >
      <Box
        position={"absolute"}
        left={"0"}
        right={"0"}
        marginInline="auto"
        top="-12"
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        backgroundColor={"blue.300"}
        boxSize="28"
        borderRadius={"full"}
      >
        <Box
          backgroundColor={"whiteAlpha.900"}
          boxSize="24"
          borderRadius={"full"}
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
        >
          <Box
            backgroundColor={"blue.300"}
            boxSize="20"
            borderRadius={"full"}
          />
        </Box>
      </Box>
      <VStack spacing={"4"} mx="10%">
        <Text fontSize="1.8rem" mt="30%">
          Log in
        </Text>
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

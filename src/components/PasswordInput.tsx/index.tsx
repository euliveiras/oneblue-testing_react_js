import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FiLock } from "react-icons/fi";

export const PasswordInput = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents={"none"}>
        <Icon as={FiLock} color="gray.900" />
      </InputLeftElement>
      <Input
        size={"lg"}
        variant={"outline"}
        color={"gray.900"}
        focusBorderColor="blue.300"
        bgColor={"blackAlpha.100"}
        borderColor={"whiteAlpha.900"}
        border={"2.5px solid"}
        borderRadius={"lg"}
        type="password"
        placeholder="password"
        _placeholder={{ color: "gray.900" }}
      />
    </InputGroup>
  );
};

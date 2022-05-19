import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FiUser } from "react-icons/fi";

export const NameInput = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents={"none"}>
        <Icon
          as={FiUser}
          color="gray.900"
        />
      </InputLeftElement>
      <Input
        variant={"outline"}
        color={"whiteAlpha.900"}
        focusBorderColor="blue.300"
        bgColor={"blackAlpha.100"}
        borderColor={"whiteAlpha.900"}
        border={"2.5px solid"}
        borderRadius={"lg"}
        type="text"
        placeholder="username"
        _placeholder={{ color: "gray.900"}}
      />
    </InputGroup>
  );
};

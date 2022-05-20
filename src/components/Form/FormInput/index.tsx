import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FiUser } from "react-icons/fi";

type FormInputProps = {
  placeholder: string;
  icon: IconType;
  type: string;
};

export const FormInput: React.FC<FormInputProps> = ({
  icon,
  placeholder,
  type,
}) => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents={"none"}>
        <Icon as={icon} color="gray.900" />
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
        type={type}
        placeholder={placeholder}
        _placeholder={{ color: "gray.900" }}
      />
    </InputGroup>
  );
};

import { Icon, Input, InputGroup, InputLeftElement, InputProps } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface FormInputProps extends InputProps{
  placeholder: string;
  icon: IconType;
  type: string;
  name: string;
};

export const FormInput = ({
  icon,
  placeholder,
  type,
  name,
  ...rest
}: FormInputProps) => {

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
        name={name}
        type={type}
        placeholder={placeholder}
        _placeholder={{ color: "gray.900" }}
        {...rest}
      />
    </InputGroup>
  );
};

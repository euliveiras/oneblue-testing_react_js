import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useField } from "@unform/core";
import { RefObject, useEffect, useRef } from "react";
import { IconType } from "react-icons";

type FormInputProps = {
  placeholder: string;
  icon: IconType;
  type: string;
  name: string;
};

export const FormInput: React.FC<FormInputProps> = ({
  icon,
  placeholder,
  type,
  name,
}) => {
  const inputRef: RefObject<HTMLInputElement> = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);
  return (
    <InputGroup>
      <InputLeftElement pointerEvents={"none"}>
        <Icon as={icon} color="gray.900" />
      </InputLeftElement>
      <Input
        ref={inputRef}
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
      />
    </InputGroup>
  );
};

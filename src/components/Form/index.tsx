import {
  Button,
  Link as ChakraLink,
  Text,
  VStack,
  Box,
} from "@chakra-ui/react";
import { Form as FormWeb } from "@unform/web";
import { FormHandles, SubmitHandler } from "@unform/core";
import * as Yup from "yup";
import Link from "next/link";
import { useRef, useState } from "react";
import { FiUser, FiLock } from "react-icons/fi";
import { CircleComponent } from "../Circle";
import { FormInput } from "./FormInput";

type FormData = {
  user: string;
  password: string;
};

export const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setIsSubmitting(true);
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        user: Yup.string().required("Nome Obrigatório"),
        password: Yup.string().min(6, "Mínimo de seis dígitos"),
      });
      console.log(data);
      await schema.validate(data);
      setIsSubmitting(false);
    } catch (err) {
      setIsSubmitting(false);
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        console.log(err);
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current?.setErrors(validationErrors);
      }
    }
  };

  return (
    <FormWeb onSubmit={handleSubmit} ref={formRef}>
      <Box
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
          <FormInput placeholder="name" name="user" icon={FiUser} type="text" />
          <FormInput
            placeholder="password"
            name="password"
            icon={FiLock}
            type="password"
          />
          <Button
            isLoading={isSubmitting}
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
      </Box>
    </FormWeb>
  );
};

import {
  Button,
  Link as ChakraLink,
  Text,
  VStack,
  Box,
  Input,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { FormEventHandler, useState } from "react";
import { FiUser, FiLock } from "react-icons/fi";
import { CircleComponent } from "../Circle";
import { FormInput } from "./FormInput";

type FormData = {
  user: string;
  password: string;
};

const logInSchema = Yup.object().shape({
  user: Yup.string().required("Nome Obrigatório"),
  password: Yup.string()
    .min(6, "Mínimo de seis dígitos")
    .required("Senha obrigatória"),
});

export const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <Box
      position={"relative"}
      w={"30%"}
      minWidth={"320px"}
      h={"70%"}
      backgroundColor="whiteAlpha.900"
      borderRadius={"base"}
    >
      <CircleComponent />
      <Formik
        initialValues={{ user: "", password: "" }}
        onSubmit={(data) => {
          console.log(data);
          setIsSubmitting(true);
        }}
        validationSchema={logInSchema}
      >
        {({ handleSubmit, errors, touched }) => (
          <VStack as="form" onSubmit={handleSubmit} spacing={"4"} mx="10%">
            <Text fontSize="1.8rem" mt="30%">
              Log in
            </Text>
            <FormControl isInvalid={!!errors.user && touched.user}>
              <Field
                as={FormInput}
                name="user"
                type="text"
                icon={FiUser}
                placeholder="name"
              />
              <FormErrorMessage>{errors.user}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.password && touched.password}>
              <Field
                as={FormInput}
                name="password"
                type="password"
                placeholder="password"
                icon={FiLock}
              />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>
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
        )}
      </Formik>
    </Box>
  );
};

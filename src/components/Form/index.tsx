import {
  Button,
  Link as ChakraLink,
  Text,
  VStack,
  Box,
  FormControl,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useState } from "react";
import { FiUser, FiLock } from "react-icons/fi";
import { CircleComponent } from "../Circle";
import { FormInput } from "./FormInput";
import { api } from "../../utils/axios";
import { Router, useRouter } from "next/router";

type FormProps = {
  formType: "login" | "cadaster";
};

const logInSchema = Yup.object().shape({
  user: Yup.string()
    .required("Nome Obrigatório")
    .max(40, "Máximo de 40 caracteres"),
  password: Yup.string()
    .min(6, "Mínimo de seis dígitos")
    .max(40, "Máximo de 40 caracteres")
    .required("Senha obrigatória"),
});

export const Form = ({ formType }: FormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const toast = useToast();

  if (formType === "login") {
    return (
      <>
        <Box
          position={"relative"}
          w={"sm"}
          h={"md"}
          backgroundColor="whiteAlpha.900"
          borderRadius={"base"}
          boxShadow={"lg"}
        >
          <CircleComponent />
          <Formik
            initialValues={{ user: "", password: "" }}
            onSubmit={async (data) => {
              setIsSubmitting(true);
              try {
                const response = await api.post("/login", {
                  name: data.user,
                  password: data.password,
                });
                if (response.data.ok === true) {
                  router.push("/home");
                }
              } catch (err: any) {
                const message = err.response.data.why;
                // api error message
                setIsSubmitting(false);
                toast({
                  position: "top-right",
                  title: "Error",
                  description: message,
                  status: "error",
                  duration: 10000,
                  isClosable: true,
                });
              }
            }}
            validationSchema={logInSchema}
          >
            {({ handleSubmit, errors, touched }) => (
              <VStack as="form" onSubmit={handleSubmit} spacing={"4"} mx="10%">
                {/* error unsolved in types of onSubmit */}
                <Text fontSize="2xl" mt="30%" fontWeight={"bold"}>
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
                  entrar
                </Button>
                <Link href="/cadaster" passHref>
                  <ChakraLink
                    color={"gray.500"}
                    textDecoration="none"
                    _hover={{ color: "gray.800" }}
                  >
                    criar conta
                  </ChakraLink>
                </Link>
              </VStack>
            )}
          </Formik>
        </Box>
      </>
    );
  }

  if (formType === "cadaster") {
    return (
      <>
        <Box
          position={"relative"}
          w={"sm"}
          h={"md"}
          backgroundColor="whiteAlpha.900"
          borderRadius={"base"}
          boxShadow={"lg"}
        >
          <CircleComponent />
          <Formik
            initialValues={{ user: "", password: "" }}
            onSubmit={async (data) => {
              try {
                const response = await api.post("/user/cadaster", {
                  name: data.user,
                  password: data.password,
                });
                toast({
                  position: "top-right",
                  title: "Cadastro",
                  description: "Conta criada",
                  status: "success",
                  duration: 10000,
                  isClosable: true,
                });
              } catch (err: any) {
                const message = err.response.data.why;
                toast({
                  position: "top-right",
                  title: "Error",
                  description: message,
                  status: "error",
                  duration: 10000,
                  isClosable: true,
                });
              }
            }}
            validationSchema={logInSchema}
          >
            {({ handleSubmit, errors, touched }) => (
              <VStack as="form" onSubmit={handleSubmit} spacing={"4"} mx="10%">
                {/* error unsolved in types of onSubmit */}
                <Text fontSize="2xl" mt="30%" fontWeight={"bold"}>
                  Cadastrar
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
                  loadingText="Cadastrando"
                  colorScheme={"blue"}
                  variant={"solid"}
                  w="80%"
                  h="3.2rem"
                  type="submit"
                  borderRadius={"base"}
                >
                  Cadastrar
                </Button>
                <Link href="/" passHref>
                  <ChakraLink
                    color={"gray.500"}
                    textDecoration="none"
                    _hover={{ color: "gray.800" }}
                  >
                    já tem uma conta?
                  </ChakraLink>
                </Link>
              </VStack>
            )}
          </Formik>
        </Box>
      </>
    );
  }

  return null;
};

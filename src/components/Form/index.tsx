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

type FormProps = {
  formType: "login" | "cadaster";
};

const logInSchema = Yup.object().shape({
  user: Yup.string().required("Nome Obrigatório"),
  password: Yup.string()
    .min(6, "Mínimo de seis dígitos")
    .required("Senha obrigatória"),
});

export const Form = ({ formType }: FormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  if (formType === "login") {
    return (
      <>
        <Box>
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
              onSubmit={(data) => {
                console.log(data);
                setIsSubmitting(true);
                toast({
                  position: "top-right",
                  title: "Erro",
                  description: "Tente mais tarde",
                  status: "error",
                  duration: 10000,
                  isClosable: true,
                });
              }}
              validationSchema={logInSchema}
            >
              {({ handleSubmit, errors, touched }) => (
                <VStack
                  as="form"
                  onSubmit={handleSubmit}
                  spacing={"4"}
                  mx="10%"
                >
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
                  <FormControl
                    isInvalid={!!errors.password && touched.password}
                  >
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
        </Box>
      </>
    );
  }

  if (formType === "cadaster") {
    return (
      <>
        <Box>
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
              onSubmit={(data) => {
                console.log(data);
                setIsSubmitting(true);
                toast({
                  position: "top-right",
                  title: "Conta criada",
                  description: "A conta foi criada com sucesso",
                  status: "success",
                  duration: 10000,
                  isClosable: true,
                });
              }}
              validationSchema={logInSchema}
            >
              {({ handleSubmit, errors, touched }) => (
                <VStack
                  as="form"
                  onSubmit={handleSubmit}
                  spacing={"4"}
                  mx="10%"
                >
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
                  <FormControl
                    isInvalid={!!errors.password && touched.password}
                  >
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
                    entrar
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
        </Box>
      </>
    );
  }
};

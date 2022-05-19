import type { NextPage } from 'next'
import { Center } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Center 
      w="100vw" 
      h="100vh"
      backgroundImage={"/bg.jpg"}
      backgroundSize="cover"
    >
      Olá
    </Center>
  )
};

export default Home

import { Box } from "@chakra-ui/react";

export const CircleComponent = () => {
  return (
    <Box
      position={"absolute"}
      left={"0"}
      right={"0"}
      marginInline="auto"
      top="-12"
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      backgroundColor={"blue.300"}
      boxSize="28"
      borderRadius={"full"}
    >
      <Box
        backgroundColor={"whiteAlpha.900"}
        boxSize="24"
        borderRadius={"full"}
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
      >
        <Box backgroundColor={"blue.300"} boxSize="20" borderRadius={"full"} />
      </Box>
    </Box>
  );
};

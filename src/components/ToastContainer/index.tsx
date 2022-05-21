import { AnimatePresence, motion } from "framer-motion";
import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const ToastContainer = ({ isVisible }: { isVisible: boolean }) => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (isVisible === true) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
    }
  }, [isVisible]);
  return (
    <AnimatePresence>
      {showToast && (
        <Flex
          as={motion.div}
          w="160px"
          h="90px"
          position={"absolute"}
          justify={"center"}
          align={"center"}
          border={"5px solid"}
          borderColor={"blue.500"}
          borderRadius="0.8rem"
          top={0}
          initial={{ right: -120, opacity: 0 }}
          animate={{ right: 0, opacity: 1 }}
          exit={{ right: -120, opacity: 0 }}
        >
          <Text>Olá</Text>
        </Flex>
      )}
    </AnimatePresence>
  );
};

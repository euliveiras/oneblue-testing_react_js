import { AnimatePresence, motion } from "framer-motion";
import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const ToastContainer = ({
  isVisible,
  message,
  error,
}: {
  isVisible: boolean;
  message: string;
  error: boolean;
}) => {
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
          paddingInline={24}
          paddingBlock={4}
          pos={"absolute"}
          justify={"center"}
          align={"center"}
          border={".3em solid"}
          borderColor={error ? "red.700" : "blue.500"}
          borderRadius="md"
          top={0}
          initial={{ right: -120, opacity: 0 }}
          animate={{ right: 10, opacity: 1 }}
          exit={{ right: -120, opacity: 0 }}
        >
          <Text color={error ? "red.700" : "blue.500"}>{message}</Text>
        </Flex>
      )}
    </AnimatePresence>
  );
};

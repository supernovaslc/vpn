import React from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  useColorMode,
} from "@chakra-ui/react";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex flex={0} justifyContent="end" alignItems="center" gap={3}height="32px" mx={6} my={3}>
      <Button
        variant="ghost"
        leftIcon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        height="40px"
        my="-4px"
      >
        Mode
      </Button>
    </Flex>
  );
}

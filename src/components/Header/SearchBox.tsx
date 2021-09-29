import { useRef } from "react";
import { Flex, Input, Icon } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

// controlled components
// uncontrolled components

// imperativa vs declarativa

export function SearchBox() {
  const searchInputRef = useRef<HTMLInputElement>(null);

  // searchInputRef.current?.focus(); (imperativo)

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        ref={searchInputRef}
        color="gray.50"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: "gray.400" }}
      />

      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}

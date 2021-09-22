import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Denis Ladeira</Text>
          <Text color="gray.300" fontSize="small">
            denisladeira1@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Denis Ladeira"
        src="https://avatars.githubusercontent.com/u/22669861?v=4"
      />
    </Flex>
  );
}

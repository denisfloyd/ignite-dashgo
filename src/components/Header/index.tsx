import { Flex } from "@chakra-ui/react";

import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
  return (
    <Flex
      as="header"
      width="100%"
      height="20"
      maxWidth="80%"
      marginX="auto"
      marginTop="4"
      paddingX="6"
      align="center"
    >
      <Logo />
      <SearchBox />

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  );
}

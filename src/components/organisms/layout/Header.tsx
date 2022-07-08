/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useCallback, VFC } from "react";
import {
  Box,
  // Button,
  // Drawer,
  // DrawerBody,
  // DrawerContent,
  // DrawerOverlay,
  Flex,
  Heading,
  // IconButton,
  Link,
  useDisclosure
} from "@chakra-ui/react";
// import { HamburgerIcon } from "@chakra-ui/icons";

import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molcules/MenuDrawer";
import { useHistory } from "react-router-dom";

export const Header: VFC = memo(() => {
  // return <div style={{ height: "50px", backgroundColor: "teal" }}></div>;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  const onClickHome = useCallback(() => history.push("/home"), []);

  return (
    <>
      <Flex
        ad="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link>ユーザー一覧</Link>
          </Box>
          <Link>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer onClose={onClose} isOpen={isOpen} />
    </>
  );
});

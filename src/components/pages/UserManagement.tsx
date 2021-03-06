/* eslint-disable react-hooks/exhaustive-deps */

import { memo, useCallback, useEffect, VFC } from "react";
import {
  Center,
  // FormControl,
  // FormLabel,
  // Input,
  // Modal,
  // ModalBody,
  // ModalCloseButton,
  // ModalContent,
  // ModalHeader,
  // ModalOverlay,
  Spinner,
  // Stack,
  useDisclosure,
  Wrap,
  WrapItem
} from "@chakra-ui/react";

import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useSelectUser } from "../../hooks/useSelectUser";
import { useLoginUser } from "../../hooks/useLoginUser";

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();
  // console.log(selectedUser);
  const { loginUser } = useLoginUser();
  // console.log(loginUser);

  useEffect(() => getUsers(), []);

  const onClickUser = useCallback(
    (id: number) => {
      // console.log(id);
      onSelectUser({ id, users, onOpen });
      // onOpen();
    },
    [users, onSelectUser, onOpen]
  );

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} m="auto">
              <UserCard
                id={user.id}
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal
        user={selectedUser}
        isOpen={isOpen}
        isAdmin={loginUser?.isAdmin}
        onClose={onClose}
      />
      {/* <Modal
        isOpen={isOpen}
        onClose={onClose}
        autoFocus={false}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent pb={6}>
          <ModalHeader>??????????????????</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>??????</FormLabel>
                <Input value="??????" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>???????????????</FormLabel>
                <Input value="Keiichi Kobayashi" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>?????????</FormLabel>
                <Input value="kk@kk.com" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>TEL</FormLabel>
                <Input value="0000-123-4567" isReadOnly />
              </FormControl>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal> */}
    </>
  );
});

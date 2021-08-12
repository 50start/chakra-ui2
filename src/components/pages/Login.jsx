import { memo, useState } from "react";
import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login = memo(() => {
  const { login, loading } = useAuth();
  const [userId, setUserId] = useState("");

  const onChangeUserId = (e) => {
    setUserId(e.target.value);
  };

  const onClickLogin = () => {
    login(userId);
  };

  return (
    //Flexでレイアウトの調整 //BoxでBOX内の位置を調整 Headingはデフォルトでh2
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        {/** Stack=> inputとbuttonの間の余白が等間隔、かつwidthを100に整えてくれる。囲った中を等間隔にしていく Divider=>仕切り線*/}
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder="ユーザーID"
            value={userId}
            onChange={onChangeUserId}
          />
          <PrimaryButton
            disabled={userId === ""}
            loading={loading}
            onClick={onClickLogin}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});

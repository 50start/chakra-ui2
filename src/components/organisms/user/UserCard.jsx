import { memo } from "react";
import { Text, Box, Image, Stack } from "@chakra-ui/react";

export const UserCard = memo((props) => {
  const { id, imageUrl, userName, fullName, onClick } = props;
  return (
    <Box //カードの要素を設定
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      padding={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={() => onClick(id)} //カードをクリックした時にモーダルが表示
      //どのユーザーが押されたか関数を生成する　onClickで認識させる　onClickにidを渡す
    >
      {/** Stack => テキスト要素の中の感覚を調整 */}
      <Stack textAlign="center">
        <Image
          borderRadius="full"
          boxSize="160px"
          src={imageUrl}
          alt={userName}
          m="auto"
        />
        {/**boxsize 画像のサイズ full 写真を丸くする m=auto センター寄せ*/}
        {/**Text pタグの様なもの*/}
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color="green">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});

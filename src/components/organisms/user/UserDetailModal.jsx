import { memo, useEffect, useState } from "react";

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} from "@chakra-ui/react";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

export const UserDetailModal = memo((props) => {
  const { user, isOpen, onClose, isAdmin = false } = props; //isAdminを設定していない場合はデフォルトでは管理者じゃない
  //valueの値をstate経由で渡すstateを更新
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  //useEffectで初期表示時にset関数を呼ぶ
  useEffect(() => {
    setUsername(user?.username ?? ""); //undefinedの場合は空
    setName(user?.name ?? ""); // ??は左辺がundefinedかnullの時右辺が実行される
    setEmail(user?.email ?? "");
    setPhone(user?.phone ?? "");
  }, [user]); //渡されるuserの値がが変更される時に実行

  const onChangeUserName = (e) => {
    setUsername(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const onClickUpdate = () => {
    alert();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset={"slideInBottom"}
    >
      {/**autoFocus =>モーダルのバツボタン motionPreset={"slideInBottom"} => モーダルが下から出てくる*/}
      <ModalOverlay />
      <ModalContent pb={2}>
        　{/** コンテンツのpadding-bottom*/}
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          　{/**左右の幅 */}
          <Stack spacing={4}>
            {/**各項目の幅 */}
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input
                value={username}
                onChange={onChangeUserName}
                isReadOnly={!isAdmin}
              />
              {/**isReadOnly　編集ができない userはnullの可能性があるのでオプショナルチェーニングをつける*/}
            </FormControl>
            <FormControl>
              <FormLabel>フルーネーム</FormLabel>
              <Input
                value={name}
                onChange={onChangeName}
                isReadOnly={!isAdmin}
              />
            </FormControl>
            <FormControl>
              <FormLabel>MAIL</FormLabel>
              <Input
                value={email}
                onChange={onChangeEmail}
                isReadOnly={!isAdmin}
              />
            </FormControl>
            <FormControl>
              <FormLabel>TEL</FormLabel>
              <Input
                value={phone}
                onChange={onChangePhone}
                isReadOnly={!isAdmin}
              />
            </FormControl>
          </Stack>
        </ModalBody>
        {/**このfooterのエリアはisAdminがtrueの時だけModalFooterを表示 */}
        {isAdmin && (
          <ModalFooter>
            <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>　
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
});

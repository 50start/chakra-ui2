import { memo, useEffect, useCallback } from "react";
import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useSelectUser } from "../../hooks/useSelectUser";
import { useLoginUser } from "../../hooks/useLoginUser";
import { UserDetailModal } from "../organisms/user/UserDetailModal";

export const UserManagement = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure(); //モーダル表示に必要なhooks chakra-uiが提供している便利な機能
  const { getUsers, loading, users } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();
  //ユーザ一覧のページでログイン時に設定をしたcontextの値が正常に取る
  //LoginUserProviderからexportされuseLoginUser.js経由されたloginUser
  const { loginUser } = useLoginUser();
  console.log(loginUser);

  useEffect(() => {
    //画面表示時にユーザーの一覧を取得　初期マウント時１回だけ実行
    getUsers();
  }, []);

  const onClickUser = useCallback(
    (id) => {
      //id => user.idが渡ってくる
      //各ユーザーをクリックした時にモーダルを開く関数 propsと渡していく関数は必ずuseCallback!
      onSelectUser({ id, users, onOpen }); //props{onClickUser関数から渡ってきたidとuseAllUsersのuser,useDisclosureのonOpenから引用}
      //onOpen();
    },
    [users, onSelectUser, onOpen]
  ); //usersが変更されるたびにonSelectUserのusersが再設定

  return (
    //WrapはそれぞれWrapItemで囲う Boxはdivタグの代わり md以上でpadding 10px
    <>
      {loading ? ( //loding中はSpinner　それ以外はuserCardを表示
        <Center h="100vh">
          {/**100vh height自体を画面の高さいっぱいにする 真ん中にLoadingが出る*/}
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} justify="space-around">
          {users.map(
            (
              user //WrapItemをロープで回す
            ) => (
              <WrapItem key={user.id}>
                <UserCard
                  id={user.id}
                  imageUrl="http://source.unsplash.com/random"
                  userName={user.username}
                  fullName={user.name}
                  onClick={onClickUser}
                />
              </WrapItem>
            )
          )}
        </Wrap>
      )}
      <UserDetailModal
        isOpen={isOpen}
        isAdmin={loginUser?.isAdmin}
        onClose={onClose}
        user={selectedUser}
      />
    </>
  );
});

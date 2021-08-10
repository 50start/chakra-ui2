import { useState, useCallback } from "react";

//選択したユーザー情報を特定して、モーダルを表示するカスタムフック
export const useSelectUser = () => {
  // userクリックされた時のidからuserを取得するロジックの部分と、実際一致したuserの情報を返す
  const [selectedUser, setSelectedUser] = useState(null); //selectされたuserの情報を持っておきたい 初期値未選択のnull
  const onSelectUser = useCallback((props) => {
    const { id, users, onOpen } = props; //users=>配列 配列の中のid
    const targetUser = users.find((user) => user.id === id); //findとは条件に一致する最初の要素を返す
    setSelectedUser(targetUser); //usersの中の各userを順番に見ていきuser.idとUserCardから渡されたidが一致する要素をtargetUserに返す
    onOpen();
  }, []); //userがクリックされた時、userを特定する関数を返す
  return { onSelectUser, selectedUser };
};

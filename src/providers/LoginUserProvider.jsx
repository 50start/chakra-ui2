import { Children, createContext, useState } from "react";
//ログインしたユーザー情報グローバルなstateで管理していく 情報を保持（管理）

export const LoginUserContext = createContext({}); //useLoginUser.jsでLoginUserContextを扱えるようにexport

export const LoginUserProvider = (props) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState(null);

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {/**Contextの値として渡していく中身をvalueに記載 useStateのloginuser, setLoginUser*/}
      {children}
      {/** Router.jsxのLoginUserContextコンポーネントの中の要素が入ってきている　配下のコンポーネントでContextの値が参照できる */}
      {/**親コンポーネントからまとめて受け取る */}
    </LoginUserContext.Provider>
  );
};

//LoginUserProviderを作成したので全てのコンポーネントでContextの値を参照できるようにProviderで囲う

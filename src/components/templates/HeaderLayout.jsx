import { memo } from "react";
import { Header } from "../organisms/layout/Header";

//login画面にはHeaderを出さずにログインした後の”/home”の画面にはHeaderを表示する　それを管理するコンポーネント
export const HeaderLayout = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {/**渡されてきたchildrenをここに表示　layoutとして使いまわせる*/}
      {children}
    </>
  );
});

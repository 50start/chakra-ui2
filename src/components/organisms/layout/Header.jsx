import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import React, { useCallback, memo } from "react";

import { useDisclosure } from "@chakra-ui/react";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";
import { useHistory } from "react-router-dom";

export const Header = memo(() => {
  //モーダルのオープン、クローズを扱うための便利なツール useDisclosure
  //open,cliseなどstateとかそれを実行する関数を自力で作らなくても良い hooks
  const { isOpen, onClose, onOpen } = useDisclosure();
  //historyAPIでhistory.pushで画面遷移をさせる
  const history = useHistory();

  //不要なレンダリングを避ける
  //useCallbackで使っている変数は依存配列に設定 historyは変わる可能性がないので入れる必要はない
  const onClickHome = useCallback(() => history.push("/home"), [history]);
  const onClickUserManagement = useCallback(
    () => history.push("/home/user_management"),
    [history]
  );
  const onClickSetting = useCallback(
    () => history.push("/home/setting"),
    [history]
  );

  return (
    <>
      {/** Flexの外側にハンバーガーメニューを実装するため　フラグメントでFlexを囲う */}
      {/**Flex => Frexboxみたいなのが実装できる Headerとして使っていく*/}
      {/**asをつけるとどのタグとしてレンダリングするか指定する*/}
      <Flex　
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex //タイトル　ユーザー管理アプリに対して
          align="center"
          as="a"
          mr={8}//margin right
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome} //as="a”に対して　Flexに対してonClickを割り当てる
        >
          {/** Heading HTMLの　h1やh2の様な表現をする md=>ブレイクポイント*/}
          {/** rem => フォントのサイズ　bass=> ベースのサイズ md=>28rem lg=>32rem*/}
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザ管理アプリ
          </Heading>
        </Flex>
        {/**Flexでリンクを横並びにする  Box=> divタグみたいなモノ*/}
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2} //伸び率
          // モバイルの時には表示しない(base: "none") ブレイクポイントになったらリンクを横並びに表示する(md: "flex")
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>//リンクの幅を調整 padding right
            <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
          </Box>
          　<Link onClick={onClickSetting}>設定</Link>
        </Flex>
        　<MenuIconButton onOpen={onOpen} />
      </Flex>
      {/** 子コンポーネントに渡す関数を書き漏らすな */}
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
      />
    </>
  );
});

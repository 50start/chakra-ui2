import { memo } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

export const MenuIconButton = memo((props) => {
  const { onOpen } = props;
  return (
    /**スマホレイアウトの時右上にメニューボタンを表示 chakra-uiでiconのライブラリーを追加する*/
    <IconButton
      aria-label="メニューボタン"
      icon={<HamburgerIcon />} //ハンバーガーメニュー
      size="sm"
      variant="unstyled" //メニューボタンの枠を消す
      display={{ base: "block", md: "none" }} //mdの時はメニューボタンを消す
      onClick={onOpen} //ハンバーガーメニューを押した時に実行
    />
  );
});

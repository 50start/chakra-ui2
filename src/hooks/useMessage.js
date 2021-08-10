//hooks化の時は関数の中に関数　returnを記述 useCallbackで囲う
import { useCallback } from "react";
import { useToast } from "@chakra-ui/react";

//useMessage側からインポートして　showMessageに対して　titleとstatusを渡したら　toastが実行される
export const useMessage = () => {
  const toast = useToast(); //hooksの記述は関数と関数の中に記述
  const showMessage = useCallback(
    (props) => {
      const { title, status } = props;
      toast({
        title,
        status,
        position: "top-left",
        duration: 2000, //メッセージが2秒のこる
        isClosable: true, //閉じれるかどうか
      });
    },
    [toast]
  );
  return { showMessage };
};

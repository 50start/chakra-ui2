import { memo } from "react";
import { Button } from "@chakra-ui/react";

export const PrimaryButton = memo((props) => {
  const { children, onClick, disabled, loading } = props;
  return (
    <Button
      bg="blue.600"
      color="white"
      _hover={{ opacity: 0.8 }}
      disabled={disabled} //文字が入力できたらボタンが活性化される
      isLoading={loading} //ボタンの上でloading
      onClick={onClick}
    >
      {children}
    </Button>
  );
});

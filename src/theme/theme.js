import { extendTheme } from "@chakra-ui/react";

//ChakraProviderに対して適用する
const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "#FAF5FF",
        color: "blue.700",
      },
    },
  },
});

export default theme;

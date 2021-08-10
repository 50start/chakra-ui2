import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import theme from "./theme/theme";
import { Router } from "./router/Router";

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/**chakra-ui扱う時必ず記述 */}
      <BrowserRouter>
        {/**ルーテングを扱う時必ず記述 */}
        <Router />
        {/**Routerコンポーネント */}
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

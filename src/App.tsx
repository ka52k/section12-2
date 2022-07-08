// import { Button, ChakraProvider } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import theme from "./theme/theme";
import { Router } from "./router/Router";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        {/* <Button colorScheme="teal">ボタン</Button>
        <p>あああああ</p> */}
        
        <Router />

      </BrowserRouter>
    </ChakraProvider>
  );
}

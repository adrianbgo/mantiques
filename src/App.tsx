import * as React from "react";
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from "./pages/Landing";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Landing />
        </Route>
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
)

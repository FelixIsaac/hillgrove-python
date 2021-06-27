import React from "react"
import { ChakraProvider, theme, Grid, Box } from "@chakra-ui/react"
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from "./pages/Home.tsx";
import { ColorModeSwitcher } from "./ColorModeSwitcher.tsx";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Grid>
      </Box>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </ChakraProvider>
)
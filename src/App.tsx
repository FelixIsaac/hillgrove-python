import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import theme from './theme';
import Footer from './components/Footer';
import Home from "./pages/Home";
// import { ColorModeSwitcher } from "./components/ColorModeSwitcher";


export const App = () => (
  <ChakraProvider theme={theme}>
    {/* <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Grid>
    </Box> */}
    <Router>
      <main className="container">
        <Switch>
          <Route path="/">
              <Home />
          </Route>
        </Switch>
      </main>
    </Router>
    <Footer />
  </ChakraProvider>
)
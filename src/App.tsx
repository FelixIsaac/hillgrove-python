import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import UserContextProvider from "./contexts/UserContext";
import theme from './theme';
import Footer from './components/Footer';
import Home from "./pages/Home";


export const App = () => (
  <UserContextProvider>
    <ChakraProvider theme={theme}>
      <Router>
        <main className="container">
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </main>
      </Router>
      <Footer />
    </ChakraProvider>
  </UserContextProvider>
)
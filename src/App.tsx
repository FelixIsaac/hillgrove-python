import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import UserContextComponent from "./contexts/UserContext";
import theme from './theme';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'

export const App = () => (
  <UserContextComponent>
    <ChakraProvider theme={theme}>
      <Router>
        <Header />
        <main className="container">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </main>
      </Router>
      <Footer />
    </ChakraProvider>
  </UserContextComponent>
)
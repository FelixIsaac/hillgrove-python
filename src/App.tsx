import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import UserContextComponent from "./contexts/UserContext";
import theme from './theme';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Dashboard from './pages/Dashboard'

export const App = () => (
  <UserContextComponent>
    <ChakraProvider theme={theme}>
      <Router>
        <main className="container">
          <Switch>
            <Route exact path="/">
              <Home />
              <Dashboard />
            </Route>
          </Switch>
        </main>
      </Router>
      <Footer />
    </ChakraProvider>
  </UserContextComponent>
)
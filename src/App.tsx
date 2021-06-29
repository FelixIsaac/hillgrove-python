import React from "react"
import { ChakraProvider, Container } from "@chakra-ui/react"
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import UserContextComponent from "./contexts/UserContext";
import theme from './theme';
import Header from './components/Header';
import Footer from './components/Footer';
import SessionOne from './sessions/session-1/Index';
import Home from './pages/Home'

export const App = () => (
  <UserContextComponent>
    <ChakraProvider theme={theme}>
      <Router>
        <Header />
        <main className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Container maxWidth="4xl" my="18">
              <Route exact path="/session/1/:title/:segment?" component={SessionOne} />
              {/* <Route exact path="/session/2/:title/:segment?" component={Session} />
              <Route exact path="/session/3/:title/:segment?" component={Session} />
              <Route exact path="/session/4/:title/:segment?" component={Session} />
              <Route exact path="/session/5/:title/:segment?" component={Session} />
              <Route exact path="/session/6/:title/:segment?" component={Session} /> */}
            </Container>
          </Switch>
        </main>
      </Router>
      <Footer />
    </ChakraProvider>
  </UserContextComponent>
)
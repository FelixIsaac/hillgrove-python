import React, { Suspense, memo } from "react"
import { ChakraProvider, Spinner, Center } from "@chakra-ui/react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserContextComponent from "./contexts/UserContext";
import theme from './theme';
import Header from './components/Header';
import Footer from './components/Footer';

const Home = React.lazy(() => import('./pages/Home'));
const SessionManager = React.lazy(() => import('./pages/Session'));
const Feedback = React.lazy(() => import('./pages/Feedback'));
const Logout = React.lazy(() => import('./components/Logout'))

const App = () => (
  <UserContextComponent>
    <ChakraProvider theme={theme}>
      <Router>
        <Header />
        <main className="container">
          <Suspense fallback={<Center minHeight="100vh"><Spinner size="xl"/></Center>}>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/session/:session?" component={SessionManager}/>
              <Route path="/feedback" component={Feedback} />
              <Route exact path="/logout" component={Logout} />
            </Switch>
          </Suspense>
        </main>
        <Footer />
      </Router>
    </ChakraProvider>
  </UserContextComponent>
)

export default memo(App)
import React, { Suspense, memo } from "react"
import { ChakraProvider, Spinner, Center } from "@chakra-ui/react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserContextComponent from "./contexts/UserContext";
import theme from './theme';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from './components/ErrorBoundary';

const Home = React.lazy(() => import('./pages/Home'));
const SessionManager = React.lazy(() => import('./pages/Session'));
const Feedback = React.lazy(() => import('./pages/Feedback'));
const Support = React.lazy(() => import('./pages/Support'));
const Logout = React.lazy(() => import('./components/Logout'));
const NotFound = React.lazy(() => import("./pages/NotFound"))

const App = () => (
  <ErrorBoundary>
    <UserContextComponent>
      <ChakraProvider theme={theme}>
        <Router>
        <ScrollToTop />
          <Header />
          <main className="container">
            <Suspense fallback={<Center minHeight="100vh"><Spinner size="xl"/></Center>}>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/session/:session?" component={SessionManager}/>
                <Route path="/feedback" component={Feedback} />
                <Route exact path="/logout" component={Logout} />
                <Route exact path="/support" component={Support} />
                <Route path="*" component={NotFound} />
              </Switch>
            </Suspense>
          </main>
          <Footer />
        </Router>
      </ChakraProvider>
    </UserContextComponent>
  </ErrorBoundary>
)

export default memo(App)
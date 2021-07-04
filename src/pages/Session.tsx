import React, { useContext, Fragment } from "react";
import { Container } from '@chakra-ui/react';
import { Route, Switch, useRouteMatch, useHistory } from 'react-router-dom';
import { UserContext } from "../contexts/UserContext";
import SessionOne from '../sessions/session-1/Index';

const SessionManager = ({ match: { params }}) => {
    const user = useContext(UserContext);
    const history = useHistory();
    const { path } = useRouteMatch();

    if (!user.name) history.push('/');
    if (!params.session) history.push(`/`)
    
    return (
        <Switch>
            <Fragment>
                <Container maxWidth="4xl" my="18">
                    <Route path={`${path}/1/:title?/:topic?`} component={SessionOne} />
                    {/* <Route exact path="/session/2/:title/:topic?" component={Session} />
                    <Route exact path="/session/3/:title/:topic?" component={Session} />
                    <Route exact path="/session/4/:title/:topic?" component={Session} />
                    <Route exact path="/session/5/:title/:topic?" component={Session} />
                    <Route exact path="/session/6/:title/:topic?" component={Session} /> */}
                </Container>
            </Fragment>
        </Switch>
    )
}

export default SessionManager;
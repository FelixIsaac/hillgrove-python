import React, { useContext, Fragment, memo, useState, useEffect } from "react";
import { Container } from '@chakra-ui/react';
import { Route, Switch, useRouteMatch, useHistory } from 'react-router-dom';
import { UserContext } from "../contexts/UserContext";
import { updateProgress } from "../utils/Progress";
const SessionOne = React.lazy(() => import('../sessions/session-1/Index'));

const updateSession = async (session, topic) => {
    console.log(session, topic);
}

const SessionManager = ({ match: { params }}) => {
    const user = useContext(UserContext);
    const [sessions, setSessions] = useState([])
    const history = useHistory();
    const { path } = useRouteMatch();

    if (!user.name) history.push('/');
    if (!params.session) history.push(`/`)

    useEffect(() => {
        const fromStorage = sessionStorage.getItem('python-sessions');
        if (fromStorage) return setSessions(JSON.parse(fromStorage));

        fetch(`${process.env.REACT_APP_BACKEND_API}/session/all`)
            .then(response => response.json())
            .then(({ sessions }) => {
                sessionStorage.setItem('python-sessions', JSON.stringify(sessions))
                setSessions(sessions)
            })
    }, [])
    
    return (
        <Switch>
            <Fragment>
                <Container maxWidth="4xl" py="18px">
                    <Route
                        path={`${path}/1/:title?/:topic?`}
                        render={(props) => <SessionOne {...props} onTopicUpdate={updateSession} sessionData={sessions[0]}/>}
                    />
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

export default memo(SessionManager);
import React, { useContext, Fragment, memo, useState, useEffect, useCallback } from "react";
import { Container, Center, Spinner } from '@chakra-ui/react';
import { Route, Switch, useRouteMatch, useHistory } from 'react-router-dom';
import { UserContext } from "../contexts/UserContext";
import { updateProgress } from "../utils/Progress";
import textToURL from '../utils/textToURL';
const SessionOne = React.lazy(() => import('../sessions/session-1/Index'));

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

    const updateSession = useCallback((session, topic) => {
        if (!session || !topic) return;

        // converting from URL name to NAME (for database)
        const { topics: sessionTopics, name: sessionName } = sessions.find(({ name }) => session === textToURL(name));
        const { name: topicName } = sessionTopics.find(({ name }) => topic === textToURL(name));

        updateProgress(sessionName, topicName);
    }, [sessions])
    
    if (!sessions.length) return <Center minHeight="100vh"><Spinner size="xl"/></Center>

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
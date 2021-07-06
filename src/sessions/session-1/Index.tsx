import React, { memo, useEffect } from 'react';
import { Route, Switch, useRouteMatch, useHistory, Link } from 'react-router-dom';
import { Button, ButtonGroup } from '@chakra-ui/react';
import textToURL from '../../utils/textToURL';
const Introduction = React.lazy(() => import('./Introduction'));
const InteractingWithPython = React.lazy(() => import('./InteractingWithPython'));
const VariablesAndStrings = React.lazy(() => import('./VariablesAndStrings'));

const SegmentManager = ({ match: { params }, onTopicUpdate, sessionData }: any) => {
    const { path, url } = useRouteMatch();
    const history = useHistory();
    const topics = sessionData.topics.map(({ name }) => textToURL(name));

    if (params.title !== textToURL(sessionData.name)) history.replace('/')

    if (!params.title) history.replace(`${url}/${textToURL(sessionData.name)}`);
    else if (!params.topic) history.replace(`${url}/introduction`)

    useEffect(() => onTopicUpdate(params.title, params.topic), [onTopicUpdate, params.title, params.topic]);
    
    const topicNumber = topics.findIndex((topic) => topic === params.topic);
    if (topicNumber === -1 && params.topic) history.replace(`/session/1/${params.title}/introduction`)// topic not found, default to last topic

    return (
        <>
            <Switch>
                <Route exact path={`${path}/introduction`} component={Introduction}/>
                <Route exact path={`${path}/interacting-with-python`} component={InteractingWithPython}/>
                <Route exact path={`${path}/variables-and-strings`} component={VariablesAndStrings}/>
            </Switch>
            <ButtonGroup py="68px" display="flex" colorScheme="teal" justifyContent="right" spacing="18" marginTop="32px">
                <Button 
                    hidden={topicNumber === 0}
                    as={Link}
                    to={topics[topicNumber - 1]}
                    isFullWidth
                >Previous topic</Button>
                <Button 
                   hidden={topicNumber === topics.length - 1}
                   as={Link}
                   to={topics[topicNumber + 1]}
                   isFullWidth
                >Next topic</Button>
            </ButtonGroup>
        </>
    )
}

export default memo(SegmentManager);

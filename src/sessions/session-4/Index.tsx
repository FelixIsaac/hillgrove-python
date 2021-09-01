import React, { memo, useEffect } from 'react';
import { Route, Switch, useRouteMatch, useHistory, Link } from 'react-router-dom';
import { Button, ButtonGroup } from '@chakra-ui/react';
import textToURL from '../../utils/textToURL';
const MultiplicationProject = React.lazy(() => import("./MultiplicationProject"));

const SegmentManager = ({ match: { params }, onTopicUpdate, sessionData }: any) => {
    const { path, url } = useRouteMatch();
    const history = useHistory();
    const topics = sessionData.topics.map(({ name }) => textToURL(name));

    if (params.title !== textToURL(sessionData.name)) history.replace('/')

    if (!params.title) history.replace(`${url}/${textToURL(sessionData.name)}`);
    else if (!params.topic) history.replace(`${url}/multiplication-project`)

    useEffect(() => onTopicUpdate(params.title, params.topic), [onTopicUpdate, params.title, params.topic]);
    
    const topicNumber = topics.findIndex((topic) => topic === params.topic);
    if (topicNumber === -1 && params.topic) history.replace(`/session/4/${params.title}/multiplication-project`) // topic not found, default to last topic

    return (
        <>
           <Switch>
                <Route exact path={`${path}/multiplication-project`} component={MultiplicationProject}/>
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

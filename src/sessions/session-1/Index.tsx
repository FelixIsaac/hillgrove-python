import React, { memo } from 'react';
import { Route, Switch, useRouteMatch, useHistory, Link } from 'react-router-dom';
import { Button, ButtonGroup } from '@chakra-ui/react';
import textToURL from '../../utils/textToURL';
const Introduction = React.lazy(() => import('./Introduction'));
const InteractingWithPython = React.lazy(() => import('./InteractingWithPython'));

const SegmentManager = ({ match: { params }}) => {
    const { path, url } = useRouteMatch();
    const history = useHistory();

    const title = 'Introduction to Python & Programming in General';
    
    const topics = [
        'introduction',
        'interacting-with-python'
    ]
    
    // todo: default to last saved segment
    if (!params.title) history.replace(`${url}/${textToURL(title)}`);
    else if (!params.topic) history.replace(`${url}/introduction`)

    const topicNumber = topics.findIndex((topic) => topic === params.topic);
    if (topicNumber === -1 && params.topic) history.replace(`/session/1/${params.title}/introduction`)// topic not found

    return (
        <>
            <Switch>
                <Route exact path={`${path}/introduction`} component={Introduction}/>
                <Route exact path={`${path}/interacting-with-python`} component={InteractingWithPython}/>
            </Switch>
            <ButtonGroup my="68px" display="flex" colorScheme="teal" justifyContent="right" spacing="18" marginTop="32px">
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

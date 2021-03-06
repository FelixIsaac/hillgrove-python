import React, { memo, useEffect } from 'react';
import { Route, Switch, useRouteMatch, useHistory, Link } from 'react-router-dom';
import { Button, ButtonGroup } from '@chakra-ui/react';
import textToURL from '../../utils/textToURL';
const StringMethods = React.lazy(() => import("./StringMethods"));
const PythonOperators = React.lazy(() => import("./PythonOperators"));
const Conditionals = React.lazy(() => import("./Conditionals"));
const PythonFunctions = React.lazy(() => import("./PythonFunctions"));
const Lists = React.lazy(() => import("./Lists"));
const Tuples = React.lazy(() => import("./Tuples"));
const Loops = React.lazy(() => import("./Loops"));
const Range = React.lazy(() => import("./Range"));

const SegmentManager = ({ match: { params }, onTopicUpdate, sessionData }: any) => {
    const { path, url } = useRouteMatch();
    const history = useHistory();
    const topics = sessionData.topics.map(({ name }) => textToURL(name));

    if (params.title !== textToURL(sessionData.name)) history.replace('/')

    if (!params.title) history.replace(`${url}/${textToURL(sessionData.name)}`);
    else if (!params.topic) history.replace(`${url}/string-methods`)

    useEffect(() => onTopicUpdate(params.title, params.topic), [onTopicUpdate, params.title, params.topic]);
    
    const topicNumber = topics.findIndex((topic) => topic === params.topic);
    if (topicNumber === -1 && params.topic) history.replace(`/session/2/${params.title}/string-methods`) // topic not found, default to last topic

    return (
        <>
            <Switch>
                <Route exact path={`${path}/string-methods`} component={StringMethods}/>
                <Route exact path={`${path}/python-operators`} component={PythonOperators}/>
                <Route exact path={`${path}/conditionals`} component={Conditionals}/>
                <Route exact path={`${path}/python-functions`} component={PythonFunctions}/>
                <Route exact path={`${path}/sequence-data-types-list`} component={Lists}/>
                <Route exact path={`${path}/sequence-data-types-tuples`} component={Tuples}/>
                <Route exact path={`${path}/loops`} component={Loops}/>
                <Route exact path={`${path}/sequence-data-types-range`} component={Range}/>
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

import React, { memo, useEffect } from 'react';
import { Route, Switch, useRouteMatch, useHistory, Link } from 'react-router-dom';
import { Button, ButtonGroup } from '@chakra-ui/react';
import textToURL from '../../utils/textToURL';
const EscapeCharacters = React.lazy(() => import("./EscapeCharacters"));
const FormattingStrings = React.lazy(() => import("./FormattingStrings"));
const InfiniteLoops = React.lazy(() => import("./InfiniteLoops"));
const KeywordArguments = React.lazy(() => import("./KeywordArguments"));
const MoreDataTypes = React.lazy(() => import("./MoreDataTypes"));
const NestedLoops = React.lazy(() => import("./NestedLoops"));
const PythonMath = React.lazy(() => import("./PythonMath"));
const ReturnKeyword = React.lazy(() => import("./ReturnKeyword"));
const Unpacking = React.lazy(() => import("./Unpacking"));

const SegmentManager = ({ match: { params }, onTopicUpdate, sessionData }: any) => {
    const { path, url } = useRouteMatch();
    const history = useHistory();
    const topics = sessionData.topics.map(({ name }) => textToURL(name));

    if (params.title !== textToURL(sessionData.name)) history.replace('/')

    if (!params.title) history.replace(`${url}/${textToURL(sessionData.name)}`);
    else if (!params.topic) history.replace(`${url}/escape-characters`)

    useEffect(() => onTopicUpdate(params.title, params.topic), [onTopicUpdate, params.title, params.topic]);
    
    const topicNumber = topics.findIndex((topic) => topic === params.topic);
    if (topicNumber === -1 && params.topic) history.replace(`/session/3/${params.title}/escape-characters`) // topic not found, default to last topic

    return (
        <>
            <Switch>
                <Route exact path={`${path}/escape-characters`} component={EscapeCharacters}/>
                <Route exact path={`${path}/formatting-strings`} component={FormattingStrings}/>
                <Route exact path={`${path}/keyword-arguments`} component={KeywordArguments}/>
                <Route exact path={`${path}/more-data-types`} component={MoreDataTypes}/>
                <Route exact path={`${path}/infinite-loops`} component={InfiniteLoops}/>
                <Route exact path={`${path}/nested-loops`} component={NestedLoops}/>
                <Route exact path={`${path}/python-math`} component={PythonMath}/>
                <Route exact path={`${path}/return-keyword`} component={ReturnKeyword}/>
                <Route exact path={`${path}/unpacking`} component={Unpacking}/>
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

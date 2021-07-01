import React from 'react';
import { Route, Switch, useRouteMatch, useHistory } from 'react-router-dom';
import Introduction from './Introduction';

const SegmentManager = ({ match: { params }}) => {
    const { path, url } = useRouteMatch();
    const history = useHistory();
    
    const title = 'Introduction to Python & Programming in General';

    // todo: default to last saved segment
    if (!params.title) history.push(`${url}/${title.replace(/[\W_]+/g, ' ').replaceAll(' ', '-').toLowerCase()}`);
    else if (!params.segment) history.push(`${url}/introduction`)
    
    return (
        <Switch>
            <Route exact path={`${path}/introduction`} component={Introduction}/>
        </Switch>
    )
}

export default SegmentManager;
import React from 'react';
import { Route, Switch, useRouteMatch, useHistory } from 'react-router-dom';
import Introduction from './Introduction';

const SegmentManager = ({ match: { params }}) => {
    const { path, url } = useRouteMatch()
    const history = useHistory();
    
    // todo: default to last saved segment
    if (!params.segment) history.push(`${url}/introduction`)

    return (
        <Switch>
            <Route exact path={`${path}/introduction`} component={Introduction}/>
        </Switch>
    )
}

export default SegmentManager;
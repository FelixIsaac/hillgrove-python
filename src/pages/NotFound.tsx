import React from 'react';
import StatusPage from '../components/StatusPage';

const NotFound = () => (
    <StatusPage
        status={404}
        message="Not Found"
        description="The requested page was not found on the server :("
    />
)

export default NotFound;

import React, { useContext } from "react";
import { UserContext } from '../contexts/UserContext';
const Login = React.lazy(() => import("./Login"));
const Dashboard = React.lazy(() => import('./Dashboard'));


const Index = () => {
    const user = useContext(UserContext);
    return user.name ? <Dashboard/> : <Login />
}

export default Index;

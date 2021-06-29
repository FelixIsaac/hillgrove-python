import React, { useContext } from "react";
import { UserContext } from '../contexts/UserContext';
import Login from "./Login";
import Dashboard from './Dashboard'


const Index = () => {
    const user = useContext(UserContext);
    return user.name ? <Dashboard/> : <Login />
}

export default Index;
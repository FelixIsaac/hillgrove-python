import React, { useContext } from 'react';
import { Text, Container } from '@chakra-ui/react';
import { UserContext } from '../contexts/UserContext';
import DashboardItem from '../components/DashboardItem';

const Dashboard = () => {
    const data = [
        'Introduction to Python & Programming in General',
        'Flow Control & Object Oriented Programming',
        'Python Modules, Frameworks, and Libraries',
        'Python advanced topics and file handling',
        'Data Science Introduction using Python',
        'Advanced Python with Code Introspection'
    ]

    const user = useContext(UserContext);

    return (
        <Container maxW="container.xl" py="6">
            <Text fontSize="3xl" marginBottom="2"><span role="img" aria-label="waving hand emoji">👋</span> Welcome, {user.firstName}</Text>
            {data.map((title, i) => <DashboardItem no={i + 1} title={title} key={i} />)}
        </Container>
    )
}

export default Dashboard;

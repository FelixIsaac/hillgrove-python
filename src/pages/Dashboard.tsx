import React, { useContext } from 'react';
import { Text, Container } from '@chakra-ui/react';
import { UserContext } from '../contexts/UserContext';
const DashboardItem = React.lazy(() => import('../components/DashboardItem'));

const Dashboard = () => {
    const data = [
        'Introduction to Python & Programming in General',
        'Flow Control & Object Oriented Programming',
        'Python Modules, Frameworks, and Libraries',
        'Python advanced topics and file handling',
        'Data Science Introduction using Python',
        'Advanced Python with Code Introspection'
    ]

    const description = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        'incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud',
        'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure',
        'dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur',
        'sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ]

    const user = useContext(UserContext);

    return (
        <Container maxW="container.xl" py="6">
            <Text fontSize="3xl" marginBottom="2"><span role="img" aria-label="waving hand emoji">👋</span> Welcome, {user.firstName}</Text>
            {data.map((title, i) => <DashboardItem session={i + 1} title={title} key={i} description={description.join('')} />)}
        </Container>
    )
}

export default Dashboard;

import React, { useContext, useState } from 'react';
import { Text, Container } from '@chakra-ui/react';
import { UserContext } from '../contexts/UserContext';
import Typist from 'react-typist';
const DashboardItem = React.lazy(() => import('../components/DashboardItem'));

const WelcomeAdverb = () => {
    const [index, setIndex] = useState(0);
    const hours = new Date().getHours();
    const time = hours > 12 ? 'Afternoon' : hours > 17 ? 'Evening' : 'Good morning';
    const words = [time, 'Hello', 'Welcome', 'Howdy', 'How are you', 'How goes it', 'Hey', 'What\'s up'];
    const word = words[index % words.length];

    const Repeat = () => {
        return (
            <Typist
                onTypingDone={() => setIndex((i) => i + 1)}
                cursor={{ show: false }}
            >
                <span>{word}</span>
                <Typist.Backspace count={word.length} delay={3000} />
            </Typist>
        );
    };

    return <Repeat />;
}

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
            <Text
                fontSize="5xl"
                textAlign="center"
                marginBottom="2"
            >
                <span role="img" aria-label="waving hand emoji">👋</span>
                <WelcomeAdverb/>, {user.firstName}
            </Text>
            
            {data.map((title, i) => <DashboardItem session={i + 1} title={title} key={i} description={description.join('')} />)}
        </Container>
    )
}

export default Dashboard;

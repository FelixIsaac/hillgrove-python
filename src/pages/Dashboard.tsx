import React, { useContext, useState, useEffect } from 'react';
import { Text, Container } from '@chakra-ui/react';
import { UserContext } from '../contexts/UserContext';
import Typist from 'react-typist';
import { getProgress } from "../utils/Progress";
const DashboardItem = React.lazy(() => import('../components/DashboardItem'));

const WelcomeAdverb = () => {
    const [index, setIndex] = useState(0);
    const hours = new Date().getHours();
    const time = hours > 17 ? 'Evening' : hours > 12 ? 'Afternoon' : 'Good morning';
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
    const [loading, setLoading] = useState(true);
    const [sessions, setSessions] = useState([]);
    const [progress, setProgress] = useState([])

    useEffect(() => {
        const fromStorage = sessionStorage.getItem('python-sessions');
        
        if (fromStorage) {
            setLoading(false)
            return setSessions(JSON.parse(fromStorage));
        }

        fetch(`${process.env.REACT_APP_BACKEND_API}/session/all`)
            .then(response => response.json())
            .then(({ sessions }) => {
                sessionStorage.setItem('python-sessions', JSON.stringify(sessions))
                setSessions(sessions)
            })
            .finally(() => setLoading(false))
    }, [])

    useEffect(() => {
        getProgress()
            .then(setProgress)
    }, [])

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
            {
                loading ? (
                    Array(6).fill().map((d, i) => <DashboardItem loading key={i} />)
                ) : (
                    sessions.map(({
                        name,
                        description
                    }, i) => (
                        <DashboardItem
                            title={name}
                            description={description}
                            lastTopic={progress.find(({ last_session }) => last_session === name)?.last_topic}
                            session={i + 1}
                            key={i}
                        />
                    ))  
                )
            }
        </Container>
    )
}

export default Dashboard;

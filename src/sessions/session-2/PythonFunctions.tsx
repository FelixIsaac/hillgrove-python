import React from 'react';
import { Heading, Box } from '@chakra-ui/react';
import VideoPlayer from '../../components/VideoPlayer';

const PythonFunctions = () => {
    return (
        <Box as="article" fontSize="18px">
            <Heading as="h1">Python Function</Heading>
            <VideoPlayer
                src="https://www.youtube.com/embed/b0WcM5oug-Q"
                title="Hillgrove Python Course: Python Function"
            />
        </Box>
    )
};

export default PythonFunctions;
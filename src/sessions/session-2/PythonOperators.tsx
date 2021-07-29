import React from 'react';
import { Heading, Box } from '@chakra-ui/react';
import VideoPlayer from '../../components/VideoPlayer';

const PythonOperators = () => {
    return (
        <Box as="article" fontSize="18px">
            <Heading as="h1">Python Operators</Heading>
            <VideoPlayer
                src="https://www.youtube.com/embed/9XQU5T0Pl8w"
                title="Hillgrove Python Course: Python Operators"
            />
        </Box>
    )
};

export default PythonOperators;
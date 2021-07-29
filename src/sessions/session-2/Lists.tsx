import React from 'react';
import { Heading, Box } from '@chakra-ui/react';
import VideoPlayer from '../../components/VideoPlayer';

const Lists = () => {
    return (
        <Box as="article" fontSize="18px">
            <Heading as="h1">Sequence Data Types: Lists</Heading>
            <VideoPlayer
                src="https://www.youtube.com/embed/noLBRhLEbqQ"
                title="Hillgrove Python Course: Sequence Data Types: Lists"
            />
        </Box>
    )
};

export default Lists;
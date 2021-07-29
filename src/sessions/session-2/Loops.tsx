import React from 'react';
import { Heading, Box } from '@chakra-ui/react';
import VideoPlayer from '../../components/VideoPlayer';

const Loops = () => {
    return (
        <Box as="article" fontSize="18px">
            <Heading as="h1">Loops</Heading>
            <VideoPlayer
                src="https://www.youtube.com/embed/nT1E24Syza0"
                title="Hillgrove Python Course: Loops"
            />
        </Box>
    )
};

export default Loops;
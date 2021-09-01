import React from 'react';
import { Heading, Box } from '@chakra-ui/react';
import VideoPlayer from '../../components/VideoPlayer';

const Tuples = () => {
    return (
        <Box as="article" fontSize="18px">
            <Heading as="h1">Escape Characters</Heading>
            <VideoPlayer
                src="https://www.youtube.com/embed/WHa7AKRsQWw"
                title="Escape Characters"
            />
        </Box>
    )
};

export default Tuples;
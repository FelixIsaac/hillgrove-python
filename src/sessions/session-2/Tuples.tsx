import React from 'react';
import { Heading, Box } from '@chakra-ui/react';
import VideoPlayer from '../../components/VideoPlayer';

const Tuples = () => {
    return (
        <Box as="article" fontSize="18px">
            <Heading as="h1">Sequence Data Types: Tuples</Heading>
            <VideoPlayer
                src="https://www.youtube.com/embed/IosJISScgRw"
                title="Hillgrove Python Course: Sequence Data Types: Tuples"
            />
        </Box>
    )
};

export default Tuples;
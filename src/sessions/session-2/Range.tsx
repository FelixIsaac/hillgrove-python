import React from 'react';
import { Heading, Box } from '@chakra-ui/react';
import VideoPlayer from '../../components/VideoPlayer';

const Range = () => {
    return (
        <Box as="article" fontSize="18px">
            <Heading as="h1">Sequence Data Types: Range</Heading>
            <VideoPlayer
                src="https://www.youtube.com/embed/x0XltPFmUdM"
                title="Hillgrove Python Course: Sequence Data Types: Range"
            />
        </Box>
    )
};

export default Range;
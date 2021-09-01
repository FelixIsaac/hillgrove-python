import React from 'react';
import { Heading, Box } from '@chakra-ui/react';
import VideoPlayer from '../../components/VideoPlayer';

const Tuples = () => {
    return (
        <Box as="article" fontSize="18px">
            <Heading as="h1">Formatting Strings</Heading>
            <VideoPlayer
                src="https://www.youtube.com/embed/grnTzI6mUIM"
                title="Formatting Strings"
            />
        </Box>
    )
};

export default Tuples;
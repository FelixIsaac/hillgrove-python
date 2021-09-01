import React from 'react';
import { Heading, Box } from '@chakra-ui/react';
import VideoPlayer from '../../components/VideoPlayer';

const Tuples = () => {
    const title = "Nested Loops"

    return (
        <Box as="article" fontSize="18px">
            <Heading as="h1">{title}</Heading>
            <VideoPlayer
                src="https://www.youtube.com/embed/x724v-CIhg8"
                title={title}
            />
        </Box>
    )
};

export default Tuples;
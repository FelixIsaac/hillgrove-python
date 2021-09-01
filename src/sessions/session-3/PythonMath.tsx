import React from 'react';
import { Heading, Box } from '@chakra-ui/react';
import VideoPlayer from '../../components/VideoPlayer';

const Tuples = () => {
    const title = "Python Math"

    return (
        <Box as="article" fontSize="18px">
            <Heading as="h1">{title}</Heading>
            <VideoPlayer
                src="https://www.youtube.com/embed/8H3hmGhBKWo"
                title={title}
            />
        </Box>
    )
};

export default Tuples;
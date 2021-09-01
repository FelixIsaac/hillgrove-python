import React from 'react';
import { Heading, Box } from '@chakra-ui/react';
import VideoPlayer from '../../components/VideoPlayer';

const Tuples = () => {
    const title = "Return Keyword"

    return (
        <Box as="article" fontSize="18px">
            <Heading as="h1">{title}</Heading>
            <VideoPlayer
                src="https://www.youtube.com/embed/afcsY9g2tJU"
                title={title}
            />
        </Box>
    )
};

export default Tuples;
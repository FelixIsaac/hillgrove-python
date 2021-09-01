import React from 'react';
import { Heading, Box } from '@chakra-ui/react';
import VideoPlayer from '../../components/VideoPlayer';

const Tuples = () => {
    const title = "More on Python Data Types"

    return (
        <Box as="article" fontSize="18px">
            <Heading as="h1">{title}</Heading>
            <VideoPlayer
                src="https://www.youtube.com/embed/Jzl7I_cewgQ"
                title={title}
            />
        </Box>
    )
};

export default Tuples;
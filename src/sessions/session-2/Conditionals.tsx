import React from 'react';
import { Heading, Box } from '@chakra-ui/react';
import VideoPlayer from '../../components/VideoPlayer';

const Conditionals = () => {
    return (
        <Box as="article" fontSize="18px">
            <Heading as="h1">Conditionals</Heading>
            <VideoPlayer
                src="https://www.youtube.com/embed/I2Cclt7eamY"
                title="Hillgrove Python Course: Conditionals"
            />
        </Box>
    )
};

export default Conditionals;
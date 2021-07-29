import React from 'react';
import { Heading, Box, Link } from '@chakra-ui/react';
import VideoPlayer from '../../components/VideoPlayer';

const StringMethods = () => {
    return (
        <Box as="article" fontSize="18px">
            <Heading as="h1">String Methods</Heading>
            <VideoPlayer
                src="https://www.youtube.com/embed/mJ2AO_h1jv4"
                title="Hillgrove Python Course: String Methods"
            />
            <Link color="blue" isExternal isTruncated href="https://www.w3schools.com/python/python_ref_string.asp">
                List of string methods
            </Link>
        </Box>
    )
};

export default StringMethods;
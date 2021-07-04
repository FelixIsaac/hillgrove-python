import React from 'react';
import { motion } from "framer-motion"
import { useHistory } from 'react-router-dom';
import textToURL from '../utils/textToURL';
import {
    Heading,
    Box,
    Center,
    Text,
    Badge,
    useColorModeValue
} from '@chakra-ui/react';

const DashboardItem = ({ title, no, session, description }) => {
    const history = useHistory();

    return (
        <Center py={6}>
            <Box
                maxW={'6xl'}
                w={'80%'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                as={motion.button}
                onClick={() => history.push(`/session/${no}/${textToURL(title)}`)}
            >
                <Heading fontSize={'2xl'}>
                    <Badge margin="8px" colorScheme="blue">Session {no}</Badge>
                    {title}
                </Heading>
                <Text textAlign={'center'} color={useColorModeValue('gray.700', 'gray.400')} px={3}>{description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}</Text>
            </Box>
        </Center>
    ); 
}

export default DashboardItem;

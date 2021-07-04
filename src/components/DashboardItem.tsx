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

interface DashboardItemProps {
    title: string;
    session: number;
    description: string;
}

const DashboardItem = ({ title, session, description }: DashboardItemProps) => {
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
                onClick={() => history.push(`/session/${session}/${textToURL(title)}`)}
            >
                <Heading fontSize={'2xl'}>
                    <Badge margin="8px" colorScheme="blue">Session {session}</Badge>
                    {title}
                </Heading>
                <Text textAlign={'center'} color={useColorModeValue('gray.700', 'gray.400')} px={3}>{description}</Text>
            </Box>
        </Center>
    ); 
}

export default DashboardItem;

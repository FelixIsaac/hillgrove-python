import React from 'react';
import { motion } from "framer-motion"
import { useHistory } from 'react-router-dom';
import {
    Heading,
    Box,
    Center,
    Text,
    Badge,
    useColorModeValue,
    Stack
} from '@chakra-ui/react';

const DashboardItem = ({ title, no, session, description }) => {
    const history = useHistory();

    return (
        <Center py={6} margin="30px">
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
                onClick={() => history.push(`/session/${no}/${title.replace(/[\W_]+/g, ' ').replaceAll(' ', '-').toLowerCase()}`)}
            >
                <Heading fontSize={'2xl'}>
                    <Badge margin="8px" colorScheme="blue">Session {no}</Badge>
                    {title}
                </Heading>
                <Text textAlign={'center'} color={useColorModeValue('gray.700', 'gray.400')} px={3}>{description}</Text>
                <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                    <Badge
                        px={2}
                        py={1}
                        bg={useColorModeValue('gray.50', 'gray.800')}
                        fontWeight={'400'}>
                        #gottastartsomewhere
                    </Badge>
                    <Badge
                        px={2}
                        py={1}
                        bg={useColorModeValue('gray.50', 'gray.800')}
                        fontWeight={'400'}>
                        #python
                    </Badge>
                    <Badge
                        px={2}
                        py={1}
                        bg={useColorModeValue('gray.50', 'gray.800')}
                        fontWeight={'400'}>
                        #fundamentals
                    </Badge>
                </Stack>
            </Box>
        </Center>
    ); 
}

export default DashboardItem;
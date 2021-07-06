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
    useColorModeValue,
    SkeletonText,
    Skeleton
} from '@chakra-ui/react';

interface DashboardItemProps {
    title: string;
    session: number;
    description: string;
    loading: boolean;
    lastTopic: string;
}

const DashboardItem = ({ title, session, description, loading, lastTopic }: DashboardItemProps) => {
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
                onClick={() => !loading && history.push(`/session/${session}/${textToURL(title)}/${textToURL(lastTopic || '')}`)}
            >
                <Skeleton isLoaded={!loading}>
                    <Heading fontSize={'2xl'}>
                        <Badge margin="8px" colorScheme="blue">Session {session}</Badge>
                        {title}
                    </Heading>
                </Skeleton>
                <Text textAlign={'center'} color={useColorModeValue('gray.700', 'gray.400')} px={3}>
                    {
                        loading ? (
                            <SkeletonText mt="4" noOfLines={3} spacing="4" />
                        ) : (
                            description
                        )
                    }
                </Text>
            </Box>
        </Center>
    ); 
}

export default DashboardItem;

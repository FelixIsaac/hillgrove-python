import React from 'react';
import { Text, Center } from "@chakra-ui/react"

const NotFound = () => (
    <Center py="100px">
        <Text fontSize="6xl">
            <strong>404:</strong> Not found
            <Text fontSize="xl">The requested page was not found on the server :(</Text>
        </Text>
    </Center>
)

export default NotFound;

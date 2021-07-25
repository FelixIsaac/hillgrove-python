import React from 'react';
import { Text, Center } from "@chakra-ui/react"

interface IProps {
    status: number | string;
    message: string;
    description: string;
}

const ErrorPages = ({ status, message, description }: IProps) => (
    <Center py="100px">
        <Text fontSize="6xl">
            <strong>{status}:</strong> {message}
            <Text fontSize="xl">{description}</Text>
        </Text>
    </Center>
)

export default ErrorPages;

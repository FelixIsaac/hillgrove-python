import React from 'react';
import { ButtonGroup, Button } from '@chakra-ui/button';
import CodeEditor from './CodeEditor';

const CodeExercise = ({ code }: { code: string }) => {
    return (
        <>
            <CodeEditor code={code} />
            <ButtonGroup py="24px">
                <Button colorScheme="yellow">Get solution</Button>
                <Button colorScheme="blue">Get hint</Button>
                <Button colorScheme="green">Check solution</Button>
            </ButtonGroup>
        </>
    )
}

export default CodeExercise;
import React from 'react';
import CodeSnippet from '../../components/CodeSnippet';
import VideoPlayer from '../../components/VideoPlayer';
import {
    Heading,
    Text,
    Box
} from '@chakra-ui/react';

const Comments = () => {
    return (
        <Box as="article" fontSize="18px">
            <Heading as="h1">Comments</Heading>
            <VideoPlayer
                src="https://www.youtube-nocookie.com/embed/DHa9sL-GPBk"
                title="Hillgrove Python Course: Comments"
            />
            <Text>
                Comments starts with a #, and Python will ignore them:
                <CodeSnippet code={[
                    `#This is a comment`,
                    `print("Hello, World!")`,
                    ``,
                    `print("Hello, World!") #This is a comment`
                ]} />
            </Text>
            <Text>
                What are Python comments used for?
                <ul>
                    <li>To explain Python code.</li>
                    <li>Tto make the code more readable.</li>
                    <li>To prevent execution when testing code.</li>
                </ul>
            </Text>
            <Text>
                A comment does not have to be text that explains the code, it
                can also be used to prevent Python from executing code:
                <CodeSnippet code={[
                    `#print("Hello, World!")`,
                    `print("Cheers, Mate!")`
                ]} />
            </Text>
        </Box>

    )
}

export default Comments;
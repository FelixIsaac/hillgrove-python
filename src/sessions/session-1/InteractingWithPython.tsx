import React, { useContext } from 'react';
import { Heading, Text, Image, Center, Alert, AlertIcon, AlertTitle, AlertDescription, Box, Button } from '@chakra-ui/react';
import { UserContext } from '../../contexts/UserContext';

const SegmentManager = () => {
    const user = useContext(UserContext);

    return (
        <Box as="article" fontSize="18px">
            <Heading as="h1">Interacting with Python</Heading>
            <Text>
                Now that you have a basic understanding of what Python is and its uses. Let's start interacting with Python.
                By the end of this section, you will know how to execute code in a script file and work within a Python
                Integrated Development Environment (or IDE for short).
            </Text>
            <div>
                <Text>
                    I recommend that you use your iPad, or your laptop or desktop starting at this point so that it is easier
                    for you to code.
                </Text>
                <ol>
                    <li>
                        Go to <a href="https://replit.com/signup">replit</a> and sign up using your school email or
                        preferred email address.
                    </li>
                    <li>
                        Then click on <Button colorScheme="blue" my="2" mx="3" minWidth="200px">+ New repl</Button> located at the top-right of your screen, below your
                        profile name and picture.
                    </li>
                    <li>
                        You will be prompted to choose a language and name your repl. Pick Python as your repl
                        language.
                    </li>
                    <li>
                        Name your repl, you could call it <strong>Hello, World</strong>, or leave it blank and it will generate it for you.
                        Then click on "Create repl", once everything loads, you are good to go :)
                    </li>
                </ol>
            </div>
        </Box>
    )
}

export default SegmentManager;
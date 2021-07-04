import React, { useContext } from 'react';
import { Link as BrowserLink } from 'react-router-dom';
import { Heading, Text, Image, Center, Alert, AlertIcon, AlertTitle, AlertDescription, Box, Button, Link } from '@chakra-ui/react';
import CodeSnippet from '../../components/CodeSnippet';
import { UserContext } from '../../contexts/UserContext';

const SegmentManager = () => {
    const user = useContext(UserContext);

    return (
        <Box as="article" fontSize="18px">
            <Heading as="h1" id="interacting-with-python">Interacting with Python</Heading>
            <Text>
                Now that you have a basic understanding of what Python is and its uses. Let's start interacting with Python.
                By the end of this section, you will know how to execute code in a script file and work within a Python
                Integrated Development Environment (or IDE for short).
            </Text>
            <Box my="32px">
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
                <Alert status="info" my="8px">
                    <AlertIcon />
                    <AlertTitle>Note:</AlertTitle>
                    <AlertDescription>
                        If you are stuck on anything of the above steps, you can also check the{" "}
                        <Link href="#interacting-with-python" color="blue">video</Link>,
                        or join the{" "}
                        <Link to="/support" as={BrowserLink} color="blue">support channel</Link>
                    </AlertDescription>
                </Alert>
            </Box>
            <Heading as="h2" fontSize="3xl">Your first "Hello, World!" program</Heading>
            <Text>
                After setting up your development environment using <a href="https://replit.com/">replt</a>, we can now create our first Python program.
                Make sure you are inside your <strong>repl</strong> we just created.
            </Text>
                There is a long-standing custom in the computer programming field that the first code written in a newly installed language is a short program
                that displays the string "Hello, World!" to the console.
            <Text>
            </Text>
            <Text>
                The simplest Python 3 code to display Hello, World! is:
                <CodeSnippet code='print("Hello, World!")'/>
            </Text>
        </Box>
    )
}

export default SegmentManager;
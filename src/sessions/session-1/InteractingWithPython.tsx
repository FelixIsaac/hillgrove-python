import React, { useContext } from 'react';
import { Link as BrowserLink } from 'react-router-dom';
import { FiExternalLink } from 'react-icons/fi';
import CodeSnippet from '../../components/CodeSnippet';
import { UserContext } from '../../contexts/UserContext';

import {
    Heading,
    Text,
    Image,
    Center,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Box,
    Button,
    Link,
    Kbd
} from '@chakra-ui/react';

const ExternalIcon = () => <FiExternalLink style={{ display: 'inline' }}/>

const SegmentManager = () => {
    const user = useContext(UserContext);

    return (
        <Box as="article" fontSize="18px">
            <Heading as="h1" id="interacting-with-python">Interacting with Python</Heading>
            <Text>
                So {user.firstName}, that you have a basic understanding of what Python is and its uses. Let's start interacting with Python.
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
            <Text>
                There is a long-standing custom in the computer programming field that the first code written in a newly installed language is a short program
                that displays the <Kbd>string</Kbd> "Hello, World!" to the <Kbd>console</Kbd>.
            </Text>
            <Text>
                <strong>Type in</strong> the following code and click "Run" at the top of your screen inside your REPL Integrated Development Environment.
                The simplest code to display <Kbd fontSize="18px">Hello, World!</Kbd> in Python is:
                <CodeSnippet code='print("Hello, World!")'/>
            </Text>
            <Text>
                What this is going to do, is to print out "Hello, World!" onto the screen. This screen is called a console. So whatever you put inside the
                quotation marks will be printed out onto the console.
            </Text>
            <Center>
                <Image src="/images/helloworld.jpg" alt="Python 'Hello World' meme" width="md"/>
            </Center>
            <Alert status="info" my="8px">
                <AlertIcon />
                <AlertTitle>Fun Fact Time:</AlertTitle>
                <AlertDescription>
                    This is a time-honored tradition dating back to the 1970s. See{" "}
                    <Link href="https://w.wiki/JAS" color="blue" isExternal>Hello, World! <ExternalIcon/></Link>{" "}
                    for a brief history. You seriously risk upsetting the <em>qi</em> of the universe if you do not abide by this custom
                </AlertDescription>
            </Alert>
            <Text>
                You can also have multiple print statements that make up a story, like this:
                <CodeSnippet code={[
                    `print("There once was a lady named Amelia, ")`,
                    `print("she was 24 years old. ")`,
                    `print("She really liked the name Amelia, ")`,
                    `print("but didn't like being 24. ")`
                ]}/>
            </Text>
            <Text>
                To conclude, the <Kbd fontSize="18px">print</Kbd> statement will print whatever you put inside the quotation marks (a string) to the console.
            </Text>
        </Box>
    )
}

export default SegmentManager;
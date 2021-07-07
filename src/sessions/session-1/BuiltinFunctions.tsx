import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import CodeSnippet from '../../components/CodeSnippet';
import {
    Heading,
    Text,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Box,
    Kbd
} from '@chakra-ui/react';

const BuiltinFunctions = () => {
    const user = useContext(UserContext);

    return (
        <Box as="article" fontSize="18px">
            <Heading as="h1">Built-in Functions</Heading>
            <Text>
                What are functions? To keep it simple, a function is a reusable piece of code that carries out a task.
                As a metaphor, think of the remote control of your TV. On this remote control, you have buttons for different
                functions like turn on, turn off, change the channel, etc.
            </Text>
            <Text>
                These are the built-in functions in your TV. In Python and other languages, they have the same exact concept.
                o we have functions that are built into the language. We can use these functions to perform various tasks.
            </Text>
            <Text>
                In the previous topics, we have used the built-in <Kbd>print()</Kbd> function, which prints out the <strong>value</strong>{" "}
                or <strong>input</strong> to the console screen. When using a function, you have to add <strong>parentheses</strong>
                <Kbd>(</Kbd> and <Kbd>)</Kbd>. We can say <Kbd>we are calling this function</Kbd>, which means we are using this function.
            </Text>
            <Text>
                Now {user.firstName}, some functions take additional data which we refer as <Kbd>arguments</Kbd> or <Kbd>parameters</Kbd>.
                These arguments are inputs to these functions. Like whatever value or data we put input the <Kbd>print()</Kbd> function. For example,
                <CodeSnippet code={[
                    "function_argument = 100",
                    "print(function_argument)"
                ]} />
            </Text>
            <Heading as="h2">Input function</Heading>
            <Text>
                We use this function to read value from the `terminal/console` window. The function has an optional argument, which is the message prompt.
                For example we can use "What is your name?". Like this,
                <CodeSnippet code={`input("What is your name?")`} />
                Notice what your keyboard text cursor is directly beside the question mark. We can do add a <Kbd>whitespace</Kbd> at the end to fix it
                <CodeSnippet code={`input("What is your name? ")`} />
            </Text>
            <Text>
                In the console, type your name and press enter. The function <Kbd>will return</Kbd> (output) the <Kbd>string</Kbd>
                of the value that you have entered in the console. So, we can get that value by assigning the value to a variable.
            </Text>
            <Alert status="info" my="8px">
                <AlertIcon />
                <AlertTitle>Note</AlertTitle>
                <AlertDescription>
                    When a function <Kbd>returns</Kbd> it means that the function <Kbd>outputs</Kbd>
                </AlertDescription>
            </Alert>
            <Text>
                <CodeSnippet code={[
                    `name = input("What is your name? ")`,
                    `print(name)`
                ]} />
                You can see what it prints out the value of what you have typed. Let's try and make it more useful by making the program greet the name.
                <CodeSnippet code={[
                    `name = input("What is your name? ")`,
                    `print("Hello " + name)`
                ]} />
            </Text>
            <Heading as="h2">Strings</Heading>
            <Text>
                Here we can use the built-in <Kbd>len()</Kbd> function to get the length of a string, which means the number of characters in that string.
                <CodeSnippet code={[
                    `course = "Python Programming"`,
                    `print(len(course))`
                ]} />
            </Text>
        </Box>
    )
}

export default BuiltinFunctions;
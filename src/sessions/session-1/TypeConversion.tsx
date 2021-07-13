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

const TypeConversion = () => {
    const user = useContext(UserContext);

    return (
        <Box as="article" fontSize="18px">
            <Heading as="h1">Type conversion</Heading>
            <Text>
                You have learnt about the <strong>3</strong> types of data in Python they are:
                <CodeSnippet code={[
                    `10 # numbers`,
                    `True # booleans`,
                    `False # booleans`,
                    `"{user.firstName}" # strings`
                ]} />
            </Text>
            <Text>
                There are times you want convert the value of a variable from one type to another.
                Let make an input function that takes your birth year and prints your age onto the console.
                <CodeSnippet code={[
                    `birth_year = input("Enter your birth year: ")`,
                    `age = 2021 - birth_year`,
                    ``,
                    `print(age)`
                ]} />
            </Text>
            <Text>
                Running the code, you can see that the program crashes and gives you an error.
                <CodeSnippet code={[
                    `Traceback (most recent call last):`,
                    `File "main.py", line 2, in <module>`,
                    `    age = 2021 - birth_year`,
                    `TypeError: unsupported operand type(s) for -: 'int' and 'str'`
                ]} />
                So let's see what the error is about:
                <ul>
                    <li><Kbd>File "main.py", line 2</Kbd> tells us about which file and line caused the error/exception to occur</li>
                    <li><Kbd>age = 2021 - birth_year</Kbd> is the piece of code that generated this error</li>
                    <li><Kbd>TypeError: unsupported operand type(s) for -: 'int' and 'str'</Kbd> is the error message</li>
                </ul>
            </Text>
            <Text>
                In English, the error message says that it cannot subtract an integer (whole number) and a string
                <ul>
                    <li>Integer is the <Kbd>2021</Kbd></li>
                    <li>The string from <Kbd>birth_year</Kbd>, which is from the input function, which <strong>ONLY</strong> returns <Kbd>strings</Kbd></li>
                </ul>
            </Text>
            <Text>
                To further add on, if your birth year is 2006, and you typed 2006 into the console the <Kbd>birth_year</Kbd> would be a <Kbd>"2006"</Kbd> string
                <CodeSnippet code={[
                    `birth_year = input("Enter your birth year: ")`,
                    `age = 2021 - int(birth_year)`,
                    ``,
                    `print(age)`
                ]} />
            </Text>
            <Text>
                Let's speak out the code,
                <ul>
                    <li>On the first line. We call the <Kbd>input()</Kbd> function. The function returns a string, the string gets assigned to <Kbd>birth_year</Kbd>.</li>
                    <li>
                        On the second line. We pass <Kbd>birth_year</Kbd> (a string) to the <Kbd>int()</Kbd> function. The <Kbd>int()</Kbd>
                        function returns the numerical representation of <Kbd>birth_year</Kbd>. Which is then subtracted from the current year (2021)
                        to get the age. This age number gets assigned to the variable <Kbd>age</Kbd>
                    </li>
                    <li>On the third line, we <Kbd>output/print</Kbd> the age.</li>
                </ul>
            </Text>
        </Box>
    )
}

export default TypeConversion;
import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import CodeSnippet from '../../components/CodeSnippet';
import {
    Heading,
    Text,
    Box,
    Kbd,
    // Alert,
    // AlertIcon,
    // AlertTitle,
    // AlertDescription,
} from '@chakra-ui/react';

const TypeConversion = () => {
    const user = useContext(UserContext);

    return (
        <Box as="article" fontSize="18px">
            <Heading as="h1">Type conversion</Heading>
            <Text>
                Now {user.firstName}, you have learnt about the <strong>3</strong> types of data in Python they are:
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
            <Text>
                <Heading as="h2">Integers examples</Heading>
                <CodeSnippet code={[
                    "x = int(1)   # x will be 1",
                    "y = int(2.8) # y will be 2",
                    "z = int('3') # z will be 3"
                ]} />
            </Text>
            <Text>
                <Heading as="h2">Floats examples</Heading>
                 <CodeSnippet code={[
                    `x = float(1)     # x will be 1.0`,
                    `y = float(2.8)   # y will be 2.8`,
                    `z = float("3")   # z will be 3.0`,
                    `w = float("4.2") # w will be 4.2`
                ]} />
            </Text>
            <Text>
                <Heading as="h2">Strings examples</Heading>
                 <CodeSnippet code={[
                    `x = str("s1") # x will be 's1'`,
                    `y = str(2)    # y will be '2'`,
                    `z = str(3.0)  # z will be '3.0'`
                ]} />
            </Text>
            <Text>
                <Heading as="h2">SPractice</Heading>
                Let's make a simple calculator that adds two numbers. We want the calculator to do
                <ul>
                   <li>User inputs first number</li>
                   <li>User inputs second number</li>
                   <li>Add the two numbers</li>
                   <li>Prints the result</li>
                </ul>
                <CodeSnippet code={[
                    `first_num = input('First number: ')`,
                    `second_num = input('Second number: ')`,
                    ``,
                    `result = first_num + second_num`,
                    ``,
                    `print(result)`
                ]}/>
            </Text>
            <Text>
                Let's run the following code... You'll notice that it literally joins both strings together,
                so if your first number is <Kbd>20</Kbd> and your second number is <Kbd>30</Kbd>, the program outputs <Kbd>2030</Kbd>
                instead of <Kbd>50</Kbd>. This is because Python is concatenating both strings, which is derived from both input functions.
                To solve this, simple convert these strings into numbers.
                <CodeSnippet code={[
                    `first_num = int(input('First number: '))`,
                    `second_num = int(input('Second number: '))`,
                    ``,
                    `result = first_num + second_num`,
                    ``,
                    `print(result)`
                ]}/>
            </Text>
            <Text>
                Running the updated code again, we can see that we get <Kbd>50</Kbd> now. But what if we wanted to include decimals?
                Well, let's say the first number <Kbd>15.8</Kbd> and the second <Kbd>20.2</Kbd>. Since in the code you
                are converting the string <Kbd>"15.8"</Kbd> into an integer, which is a whole number, <strong>Python will literally
                remove the decimals, without rounding up to rounding down.</strong> To fix this, we need to convert the strings
                into floats (numbers with decimals) instead of integers.
                <CodeSnippet code={[
                    `first_num = float(input('First number: '))`,
                    `second_num = float(input('Second number: '))`,
                    ``,
                    `result = first_num + second_num`,
                    ``,
                    `print(result)`
                ]}/>
            </Text>
            <Text>
                <Heading as="h2">Conclusion</Heading>
                Type conversion is important in Python and other programming languages.
                There are times you need to convert the type of variable to a different type.
            </Text>
        </Box>
    )
}

export default TypeConversion;

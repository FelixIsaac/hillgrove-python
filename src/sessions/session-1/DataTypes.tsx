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
import CodeExercise from '../../components/Exercise';
import VideoPlayer from '../../components/VideoPlayer';

const DataTypes = () => {
    const user = useContext(UserContext);

    return (
        <Box as="article" fontSize="18px">
            <Heading as="h1">Data Types</Heading>
            <VideoPlayer
                src="https://www.youtube-nocookie.com/embed/ZkLNDbtUhRk"
                title="Hillgrove Python Course: Data Types"
            />
            <Text>
                You are doing great {user.firstName}! Recall that in the last topic, I mentioned that variables are containers that store data.
                Well, this is not exactly true. When you define a variable and run the program, Python will allocate some memory and store the value in that{" "}
                <strong>memory space</strong>. Then it will have this variable reference that memory location. So variable that you defined is
                just like a label for that memory location. We can use variables anywhere in our program to get access to that memory
                location and the data stored there. For example.
                <CodeSnippet code={[
                    `student_name = "${user.firstName}"`,
                    `print(student_name)`
                ]} />

                <ul>
                    <li>Python will allocate memory, and store this value, <Kbd>"{user.firstName}"</Kbd> into memory</li>
                    <li><Kbd>student_name</Kbd> will be the label or variable name that references to that memory location. And ultimately, the data stored on that memory location</li>
                    <li>When printing, Python goes that the memory location reference by the label <Kbd>student_name</Kbd> and print out the value, which is <Kbd>"{user.firstName}"</Kbd></li>
                </ul>
            </Text>
            <Text>
                Now what kind of data can be stored in a computer's memory? In the last topic, we have learned about strings.
                And now we are going to look at the built-in <strong>primitive data types</strong> in Python. There are <strong>4</strong> primitive data types
            </Text>
            <Text>
                Primitive types can be
                <ul>
                    <li>Numbers (integers and floats/floating-point number)</li>
                    <li>Booleans</li>
                    <li>Strings</li>
                </ul>
            </Text>
            <>
                <Heading as="h2">Numbers (Integers and Floats)</Heading>
                <CodeSnippet code={[
                    `student_count = 1000`,
                    `average_student_per_class = 29.41453452`
                ]} />
                <Text>The type of value of <Kbd>student_count</Kbd> is an integer or a whole number. Without any decimals at the end.</Text>
                <Text>The type of value of <Kbd>average_student_per_class</Kbd> is a float or a <strong>floating-point number</strong>. Where there are decimals at the end.</Text>
            </>
            <>
                <Heading as="h2">Booleans</Heading>
                <CodeSnippet code={[
                    `is_student = True`,
                    `in_class = False`
                ]} />
                <Text>
                    These are examples of booleans in programming. Boolean values can either be true or false, and these are exactly like <strong>yes or no</strong> in English.
                    Later in the course, you will learn to use these boolean values to make decisions in our programs.
                </Text>
                <Text>For example, if the user is an administrative user, we may want to give them extra administrative permissions.</Text>
                <Alert status="warning" my="8px">
                    <AlertIcon />
                    <AlertTitle>Important:</AlertTitle>
                    <AlertDescription>
                        Python is a <Kbd>case sensitive</Kbd> language. Meaning that lower case and upper case characters have different meanings.
                        And so boolean values should always tart with a <strong>capital letter</strong>
                    </AlertDescription>
                </Alert>
            </>
            <>
                <Heading as="h2">Strings</Heading>
                <CodeSnippet code={[
                    `school_name = 'Hillgrove Secondary School'`,
                    `# same as`,
                    `school_name = "Hillgrove Secondary School"`
                ]} />
                <Text>They are basically the same value, just a different way of creating strings.</Text>
                <Text>But what if you needed to make a multiline string. How do you do that in Python? Well, you can achieve it by using a triple-quoted string!</Text>
            </>
            <>
                <Heading as="h2">Booleans</Heading>
                <CodeSnippet code={[
                    `story = """`,
                    `There once was a lady named Amelia,`,
                    `she was 24 years old.`,
                    `She liked the name, Amelia,`,
                    `but didn't like being 24.`,
                    `"""`
                ]} />
                <Text>Is there another way you can make a multiline string? (hint: single and double quotes)</Text>
            </>
            <>
                <Heading as="h2">Exercise</Heading>
                <Text>Declare a few variables and fill in these values:</Text>
                <ul>
                    <li>We check in a patient named John Smith.</li>
                    <li>He is 20 years old.</li>
                    <li>He is a new patient</li>
                </ul>
                <CodeExercise
                    code={[
                        `patient_name =`,
                        `patient_age =`,
                        `new_patient =`
                    ]}
                    hint={['Remember about the data types and how you can represent the those data types for the patient.']}
                />
            </>
        </Box>
    )
}

export default DataTypes;
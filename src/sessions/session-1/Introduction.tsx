import React, { useContext } from 'react';
import { Heading, Text, Image, Center, Alert, AlertIcon, AlertTitle, AlertDescription, Box } from '@chakra-ui/react';
import { UserContext } from '../../contexts/UserContext';
import VideoPlayer from '../../components/VideoPlayer';

const Introduction = () => {
    const user = useContext(UserContext);

    return (
        <Box as="article" fontSize="18px">
            <Heading as="h1">Introduction</Heading>
            <VideoPlayer
                src="https://www.youtube.com/embed/HwWyhwUxCX8"
                title="Hillgrove Python Course: Introduction"
            />
            <Text>
                In this course, I will teach you everything you need to get started in Python and its core concepts. 
                The lesson has been specially designed with examples and coding exercises that enforces what you have 
                learned. At the end of each session, we are going to build a simple Python project together.
            </Text>
            <Text>
                Python is one of the most popular programming languages, and every day people use it to do
                cool things like automation in their daily lives, artificial intelligence, as well as,
                building applications and websites.
            </Text>
            <Text>
                To begin, why learn to program? Steve Jobs once said, "Everybody in this country should learn how to
                program a computer... because it teaches you how to think.". Computer programming is an enormously
                flexible tool that you can use to do amazing things that are otherwise either manual and laborsome or are
                just impossible. In fact, software is running your life. What if you learn and start running these
                programs according to your will?
            </Text>
            <Text>
                For example, you can write a program that can automatically respond to every new text message on your phone.
                To a message like "Hi" or "Hey," the program can read through the message to detect some pre-defined
                keywords like "Hi" and "Hey," and send an automatic response
            </Text>
            <Text>
                By learning how to program doesn't mean that you have the responsibility of creating the next Facebook or the
                next Dropbox. No!
                Rewind a little and see what made these big websites like Facebook, Google, YouTube and others come into being.
            </Text>
            <Center>
                <Image src="/images/funny-python-meme-9-write-10-lines-of-code.jpg" width="md" alt="'Eliminates jobs by writing Python' meme"/>
            </Center>
            <Text>
                Well {user.firstName}, now that you're familiar with programming in a nutshell, and why you should learn 
                to program. You are probably asking out of all the programming languages readily available to 
                learn, so why learn Python?
            </Text>
            <Text>
                Python, named after the British comedy group Monty Python, is a high-level, interpreted, interactive, and
                object-oriented programming language. According to the Stack Overflow Developer Survey last year, Python is the
                4th most popular language to date. Furthermore, Python is a simple language to read, learn, and write! It's also
                a free, accessible, versatile, and powerful language.
            </Text>
            <Text>
                Let’s also take a quick look at how some of the big tech companies are using the language. Google is a company
                that has used Python from the start, and it’s gained a place as one of the tech giant’s main server-side
                languages alongside C++, Java, and Golang. Instagram likes Python for its simplicity.
                Even Spotify puts the language to use in its data analysis and back-end services so that they can
                perform a ton of analysis to give recommendations to their users, and Python helps with that, they need
                something that’s simple but also works well. Last but not least, Reddit uses Python as its software backbone,
                the social discussion platform, which had 542 million visitors every month across 2017 — which is the fourth
                most visited website in the U.S. and seventh-most visited in the world.
            </Text>
            <div>
                <Text>Now that I've convinced you to learn Python, here are some of its uses,</Text>
                <ul>
                    <li>
                        Building desktop and mobile applications with a graphical user interface (GUI)
                        <Alert status="info" my="8px">
                            <AlertIcon />
                            <AlertTitle>Fun Fact Time:</AlertTitle>
                            <AlertDescription>It's pronounced like "gui" in "Penguin"</AlertDescription>
                        </Alert>
                    </li>
                    <li>Game development</li>
                    <li>Doing mathematical and scientific analysis of data</li>
                    <li>Building websites and internet applications (IoTs)</li>
                    <li>Computer systems administration and managed systems</li>
                    <li>Performing Developer Operation tasks, running and managing servers</li>
                    <li>Automating your life, or solve daily life problems with Python</li>
                    <li>Artificial intelligence, machine learning, and deep learning</li>
                </ul>
            </div>
            <Text>
                There’s a lot more to learn about Python. But by now, you should have a better idea of why Python is so popular
                and why you should consider learning to program with it. So let's start with learning the syntax of Python. The
                Python syntax is clear, concise, and focused on readability. Readability is arguably one of the more attractive
                features of the language itself. It makes Python ideal for people who are learning to program.
            </Text>
            <Text>
                Before we actually start learning Python, I want to give a disclaimer, it's okay if your code does not work, or
                if you don't understand why it is not behaving to your expected behaviour. It happens to everyone, even to the
                most experienced Python developers. If you are stuck, do not hesitate to join the WhatsApp and Telegram support
                group.
            </Text>
            <Center>
                <Image src="/images/d9e695fa3ac795d63377001d83281fb7.jpg" width="md" alt="'Code doesnt work, code works. No idea why' meme"/>
            </Center>
    </Box>
    )
}

export default Introduction;
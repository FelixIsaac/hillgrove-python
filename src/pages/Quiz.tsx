import React from 'react';
import { css } from '@emotion/react';
import {
	Heading,
	Text,
	Kbd,
	Link,
	Box,
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverHeader,
	PopoverBody,
	PopoverArrow,
	PopoverCloseButton,
} from '@chakra-ui/react';
import { FiExternalLink } from 'react-icons/fi';
import CodeExercise, { ICodeExercise } from '../components/Exercise'

interface IQuiz {
	name: string;
	instructions: string[];
}

const ExternalIcon = () => <FiExternalLink style={{ display: 'inline' }}/>

const Quiz = (props: IQuiz & ICodeExercise) => {
	const { name, instructions } = props;

	return (
        <Box
        	css={css`
        		ul,
				ol {
				  margin-top: 4px;
				}

				ul li,
				ol li {
				  margin-left: 38px;
				  margin-top: 8px;
				}
        	`}
        	fontSize="18px"
    	>
			<Heading as="h1">{name}</Heading>
			<Text style={{ marginTop: '6px' }}>
				Quiz instructions{" "}
				<Popover isLazy>
				  <PopoverTrigger>
				    <Kbd style={{ fontSize: "15px", cursor: 'pointer' }}>(pseudocode) <ExternalIcon /></Kbd>
				  </PopoverTrigger>
				  <PopoverContent>
				    <PopoverHeader fontWeight="semibold">Pseudocode meaning</PopoverHeader>
				    <PopoverArrow />
				    <PopoverCloseButton />
				    <PopoverBody>
						In computer science, pseudocode is a plain language description
						of the steps in an algorithm or another system. Pseudocode often
						uses structural conventions of a normal programming language,
						but is intended for human reading rather than machine reading.{" "}
						<Link color="blue" href="https://en.wikipedia.org/wiki/Pseudocode" isExternal>
							Wikipedia <ExternalIcon />
						</Link>
				    </PopoverBody>
				  </PopoverContent>
				</Popover>
			</Text>
			<ol>
				{instructions.map(instruction => <li>{instruction}</li>)}
			</ol>
			<CodeExercise
				code={[
					'# paste your code here from your replit...',
					'',
					''
				]}
				solutionURL={props.solutionURL}
				callback={props.callback}
				hint={props.hint}
				attempts={props.attempts}
			/>
		</Box>
	)
}

export default Quiz;

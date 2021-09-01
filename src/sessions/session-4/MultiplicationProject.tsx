import Quiz from './../../pages/Quiz';

const MultiplicationProject = () => {
	return (
		<Quiz
			name="Project: Multiplication Project"
			instructions={[
                "Create a python programme that will produce random timetables questions and provide immediate feedback. ",
                "Asks user how many questions the program should generate (min. 3 questions)",
                "Create a function that generates a question (must return a tuple that is a pair of numbers to determine its product)",
                "Displays the multiplication question",
                "Determine if input is correct from user",
                "Keep a 'score' of how many correct answers and display it at the end of the game"
            ]}
			solutionURL={"57/multiplication-project"}
			callback={(...args) => console.log('meow', args[0])}
		/>
	)
}

export default MultiplicationProject;

from random import randint

def generate_question():
    return tuple(randint(0, 10) for _ in range(2))

def quiz(questions):
    marks = 0

    for _ in range(questions):
        question = generate_question()
        formatted_question = f"{question[0]} x {question[1]}"
        answer = question[0] * question[1]

        user_input = int(input("What is {}? ".format(formatted_question)))

        if user_input == answer:
            # user answered question correctly!
            marks += 1

    # quiz ended
    print("You scored {}/{}".format(marks, questions))

def run():
    while True:
        questions = int(input("How many questions multiplication questions do you want? "))

        if questions < 3:
            print("That's not enough questions! Try again.")
        else:
            quiz(questions)
            break

# start the program
# run()
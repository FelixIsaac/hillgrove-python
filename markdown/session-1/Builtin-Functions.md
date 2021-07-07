# Built-in Functions

What are functions? To keep it simple, a function is a reusable piece of code that carries out a task. As a metaphor, think of the remote control of your TV. On this remote control, you have buttons for different functions like turn on, turn off, change the channel, etc.

These are the built-in functions in your TV. In Python and other languages, they have the same exact concept. So we have functions that are built into the language. We can use these functions to perform various tasks.

In the previous topics, we have used the built-in `print()` function, which prints out the **value** or **input** to the console screen. When using a function, you have to add **parentheses** `(` and `)`. We can say `we are calling this function`, which means we are using this function.

Now {user.firstName}, some functions take additional data which we refer as `arguments` or `parameters`. These arguments are inputs to these functions. Like whatever value or data we put input the `print()` function. For example,

```py
function_argument = 100
print(function_argument)
```

## Input function

We use this function to read value from the `terminal/console` window. The function has an optional arguement, which is the message prompt. For example we can use "What is your name?". Like this,

```py
input("What is your name?")
```

Notice what your keyboard text cursor is directly beside the question mark. We can do add a `whitespace` at the end to fix it

```py
input("What is your name? ")
```

In the console, type your name and press enter. The function `will return` (output) the `string` of the value that you have entered in the console. So, we can get that value by assigning the value to a variable.

> When a function `returns` it means that the function `outputs`

```py
name = input("What is your name? ")
print(name)
```

You can see what it prints out the value of what you have typed. Let's try and make it more useful by making the program greet the name.

```py
name = input("What is your name? ")
print("Hello " + name)
```

## Strings

Here we can use the built-in `len()` function to get the length of a string, which means the number of characters in that string.

```py
course = "Python Programming"
print(len(course))
```

# Data Types

You are doing great {user.firstName}! Recall that in the last topic, I mentioned that variables are containers that store data. Well, this is not exactly true. When you define a variable and run the program, Python will allocate some memory and store the value in that **memory space**. Then it will have this variable reference that memory location. So variable that you defined is just like a label for that memory location. We can use variables anywhere in our program to get access to that memory location and the data stored there. For example.

```py
student_name = "{user.firstName}"
print(student_name)
```

- Python will allocate memory, and store this value, `"{user.firstName}"` into memory
- `student_name` will be the label or variable name that references to that memory location. And ultimately, the data stored on that memory location
- When printing, Python goes that the memory location reference by the label `student_name` and print out the value, which is `"{user.firstName}"`

Now what kind of data can be stored in a computer's memory? In the last topic, we have learned about strings. And now we are going to look at the built-in **primitive data types** in Python. There are **4** primitive data types

Primitive types can be

- Numbers (integers and floats/floating-point number)
- Booleans
- Strings

## Numbers (Integers and Floats)

```py
student_count = 1000
average_student_per_class = 29.41453452
```

The type of value of `student_count` is an integer or a whole number. Without any decimals at the end.

The type of value of `average_student_per_class` is a float or a **floating-point number**. Where there are decimals at the end.

## Booleans

```py
is_student = True
in_class = False
```

These are examples of booleans in programming. Boolean values can either be true or false, and these are exactly like **yes or no** in English. Later in the course, you will learn to use these boolean values to make decisions in our programs.

For example, if the user is an administrative user, we may want to give them extra administrative permissions.

> Note: Python is a `case sensitive` language. Meaning that lower case and upper case characters have different meanings. And so boolean values should always tart with a **capital letter**

```py
is_student = true
in_clase = FALSE
```
These are not accepted boolean values in Python. And Python will `raise/throw` an `exception/error`. In this case, Python will throw a `syntax error`.

## Strings

As you know, is like text. Whenever working with text in your programs, you need to surround your text with quotes. However, you might not know you can do single and double-quoted strings, like so.

```py
school_name = 'Hillgrove Secondary School'
# same as
school_name = "Hillgrove Secondary School"
```

They are basically the same value, just a different way of creating strings.

But what if you needed to make a multiline string. How do you do that in Python? Well, you can achieve it by using a triple-quoted string!

```py
story = """
There once was a lady named Amelia,
she was 24 years old.
She liked the name, Amelia,
but didn't like being 24.
"""
```

Is there another way you can make a multiline string? (hint: single and double quotes)

## Exercise

Declare a few variables and fill in these values:

- We check in a patient named John Smith.
- He is 20 years old.
- He is a new patient.

```py
patient_name =
patient_age =
new_patient =
```

## Type conversions

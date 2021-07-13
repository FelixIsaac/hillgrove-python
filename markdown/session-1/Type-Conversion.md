# Type Conversion

You have learnt about the **3** types of data in Python they are:

```py
10 # numbers
True # booleans
False # booleans
"{user.firstName}" # strings
```

There are times you want convert the value of a variable from one type to another. Let make an input function that takes your birth year and prints your age onto the console.

```py
birth_year = input("Enter your birth year: ")
age = 2021 - birth_year

print(age)
```

Running the code, you can see that the program crashes and gives you an error.

    Traceback (most recent call last):
    File "main.py", line 2, in <module>
        age = 2021 - birth_year
    TypeError: unsupported operand type(s) for -: 'int' and 'str'

So let's see what the error is about:

- `File "main.py", line 2` tells us about which file and line caused the error/exception to occur
- `age = 2021 - birth_year` is the piece of code that generated this error
- `TypeError: unsupported operand type(s) for -: 'int' and 'str'` is the error message

In English, the error message says that it cannot subtract an integer (whole number) and a string
- Integer is the `2021`
- The string from `birth_year`, which is from the input function, which **ONLY** returns `strings`

To further add on, if your birth year is 2006, and you typed 2006 into the console the `birth_year` would be a `"2006"` string

```py
birth_year = input("Enter your birth year: ")

"1982"
# is different from
1982

age = 2021 - "1982"

print(age)
```

> Note: Python does not know how to subtract a string from an integer.

To solve this problem, we need to convert the string into an integer. Like so,

```py
birth_year = input("Enter your birth year: ")
age = 2021 - int(birth_year)

print(age)
```

Let's speak out the code,
- On the first line. We call the `input()` function. The function returns a string, the string gets assigned to `birth_year`.
- On the second line. We pass `birth_year` (a string) to the `int()` function. The `int()` function returns the numerical representation of `birth_year`. Which is then subtracted from the current year (2021) to get the age. This age number gets assigned to the variable `age`
- On the third line, we `output/print` the age.

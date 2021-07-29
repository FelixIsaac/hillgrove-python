# Type Conversion

You have learnt about the **3** types of data in Python they are:

```py
10 # numbers
True # booleans
False # booleans
"{user.firstName}" # strings
```

There are times you want convert the value of a variable from one type to another. Let's make an input function that takes your birth year and prints your age onto the console.

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


## Integers examples

```py
x = int(1)   # x will be 1
y = int(2.8) # y will be 2
z = int("3") # z will be 3
```

## Floats examples

```py
x = float(1)     # x will be 1.0
y = float(2.8)   # y will be 2.8
z = float("3")   # z will be 3.0
w = float("4.2") # w will be 4.2
```

## Strings examples

```py
x = str("s1") # x will be 's1'
y = str(2)    # y will be '2'
z = str(3.0)  # z will be '3.0'
```

## Practice

Let's make a simple calculator that adds two numbers. We want the calculator to do

- User inputs first number
- User inputs second number
- Add the two numbers
- Prints the result

```py
first_num = input('First number: ')
second_num = input('Second number: ')

result = first_num + second_num

print(result)
```

Let's run the following code... You'll notice that it literally joins both strings together, so if your first number is `20` and your second number is `30`, the program outputs `2030` instead of `50`. This is because Python is concatenating both strings, which is derived from both input functions. To solve this, simple convert these strings into numbers.

```py
first_num = int(input('First number: '))
second_num = int(input('Second number: '))

result = first_num + second_num

print(result)
```

Running the updated code again, we can see that we get `50` now. But what if we wanted to include decimals? Well, let's say the first number `15.8` and the second `20.2`. Since in the code you are converting the string `"15.8"` into an integer, which is a whole number, **Python will literally remove the decimals, without rounding up to rounding down.** To fix this, we need to convert the strings into floats (numbers with decimals) instead of integers.

```py
first_num = float(input('First number: '))
second_num = float(input('Second number: '))

result = first_num + second_num

print(result)
```

## Conclusion

Type conversion is important in Python and other programming languages. There are times you need to convert the type of variable to a different type.

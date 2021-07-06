# Variables And Strings

In this section, we are going to learn about variables in Python. They are the building blocks of Python. In Python, most of the time in our program, we will be working with all types of information, data, and values. This can sometimes be difficult to manage, so there's where the variables come into play. These variables are fundamentally just containers where we can store data values. So, when we use a variable and put these data values inside containers, it makes it easier to work with and manage all the different types of data.

Take this simple Python program, for example. It is printing a short story to the `console`.

```py
print("There once was a lady named Amelia, ")
print("she was 24 years old. ")
print("She liked the name, Amelia, ")
print("but didn't like being 24. ")
```

This is a valid Python program, which you can run it in your replit, if you wish. But let's say you wanted to change the character's name or age in the story to Mia. But, you will have to manually replace every occurrence of "Amelia" in the story to "Mia". So we have something like this now.

```py
print("There once was a lady named Mia, ")
print("she was 24 years old. ")
print("She liked the name, Mia, ")
print("but didn't like being 24. ")
```

Well, then what if we wanted to make the character a little bit older by 10 years? Then you have to go through the story and manually update it again.

```py
print("There once was a lady named Mia, ")
print("she was 34 years old. ")
print("She liked the name, Mia, ")
print("but didn't like being 34. ")
```

So, with four lines in our story, it was already quite tedious to replace the character's name and age. So imagine {user.firstName}, if we had a story that was thousands of lines long and the story mentions about the character's name and age hundreds of times. You have to look through every line, thousands of times, and manually change the name and age hundreds of times. You can tell it is a very impractical and not good way for us to do this.

To link back, it is really not a good way for us to manage the data in our program, the character's name and age. So, a better way to do this, so to use a `variable` to store the character's name and age. If we use a variable, it would make it a lot easier for us to put the name and age.

So let's create a variable in Python. When creating a variable in Python, we need to give Python some information about the variable, and the first piece of information Python needs, is the name of the variable. *You need to `assign` a name to this container where you are going to be storing information*. Let's call this variable `character_name`.

---

### Important:

When creating a name for a variable in Python, you want to separate different words with an undersore. So instead of `character name` we need to change it to `character_name`

---

Next, we need to give Python the second information, the `value` of the variable. In this case, we will give the `value` of variable `character_name` to `Mia`. So we have something like this in Python code. 

```py
character_name = "Mia"
```

Let's create another variable, called `character_age`, let's give the value of this variable, `34`. So you should have something like this in your replit

```py
character_name = "Mia"
character_age = "34"
```

Now that we have created variables, how do we access them? We can actually print these variables onto our console. Yep, you guessed it {user.firstName}!

```py
character_name = "Mia"
character_age = "34"

print(characters_name)
print(character_age)
```

Running the code in your replit, you will see the character's name and age get outputted out onto the console. That's how we access variables in Python. Now, let us try and manipulate a string with variables.

You can read or interpret variables as "character_name is assigned the value 'Mia'". Once you have assigned a value to a variable name, the variable can be used in a statement or expression, and its value will be substituted.

```py
character_name = "Mia"
character_age = "34"

print(character_name + " is a " + character_age + "-year-old")
```

Now the program has outputted `Mia is a 34-year-old`. Much like mathematics, you can add numbers together to get a new number. The same goes with Python, you can add and combine the strings to form a new string! This is called `concatenation`. You can use as many plus signs as you want in composing strings. In fact, many web pages are written as giant strings which are put together through a long series of string concatenations.

What we can do now with the variables is to use them in the story we have. So instead of having,

```py
print("There once was a lady named Mia, ")
print("she was 34 years old. ")
print("She liked the name, Mia, ")
print("but didn't like being 34. ")
```

We now have,

```py
character_name = "Mia"
character_age = "34"

print("There once was a lady named " + character_name + ", ")
print("she was " + character_age + " years old. ")
print("She liked the name, " + character_name + ", ")
print("but didn't like being " + character_age + ". ")
```


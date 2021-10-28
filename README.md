# JSCLG Cli

# What is JSCLG?

- It stands for 'Javascript Console Log'.
- This package parses code like this ↓

  ```
  let greeting = hello;
  let goodbye = not {{greeting}} but bye;
  import goodMorning from ./tests/goodMorning.test.js;
  greeting :- {{greeting}};
  goodbye :- {{goodbye}};
  good morning :- {{goodMorning}};
  ```

  and prints it to the console like this ↓

  ```js
  greeting :- hello
  goodbye :- not hello but bye
  good morning :- Good Morning!
  ```

# Syntax

- ## Variables

  ```
  let <variable name> = <variable value>;
  ```

  for example

  ```
  let name = squik;
  ```

- ## Importing from other javascript files

  ```
  import <data> from <file path>;
  ```

  for example

  ```
  import age from age.js;
  ```

  > **Note**: You can also use object notation to import. For example, if the file age.js file exports `{ data: { age: 15 } }`, then you can use `import data.age from age.js` to access the age property's value. The last property(in case of "data.age" it is "age") will be used as the variable name.

# Executing

```bat
jsclg <file_name>
```

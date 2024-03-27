# Cracking the Coding Interview - Javascript

## Description

This repository holds solutions to the problem sets from the modern day classic Cracking the Coding Interview as well as 
select LeetCode problems. It is intended for use by myself, my co-workers and my friends but anyone is welcome! It provides 
test suites to practice each problem.

Please feel free to make a PR if an answer is wrong or to provide additional solutions or test cases!

## Usage

The project is broken down into (1) a repository for each chapter (2) implementation of basic data structures required for
completing the problem sets (3) scaffolding and test cases to practice each problem and (4) a list of problems I personally find 
more challenging relative to the other problems in each chapter as a way to focus during review.

Each chapter is further sub-divided into a directory with solutions and a directory for practice. To practice, first add your
implementation to the empty function or functions:

```javascript
// Implement solution here.

const isUniq = (str) => {

}

module.exports = isUniq
```

Then simply run the tests using the native node.js test runner:

```
node practice.test.js
```

Each solution can also be run with some output:
```
node solutions/isUniq.js
```

Remember to be kind and empathetic in your interviews. This stuff isn't easy. Happy coding!

With Love,
Jesse
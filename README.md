# Cracking the Coding Interview - Javascript

## Description

This repository holds solutions to the problem sets from the modern day classic Cracking the Coding Interview.
It is intended for use by myself, my co-workers and my friends but anyone is welcome! It provides some simple scaffolding
to allow users to practice each problem against a set of test data and prints out the results LeetCode style with a pass
or fail.

Please feel free to make a PR if an answer is wrong or to provide additional (probably better) solutions or additional test cases!

## Usage

The project is broken down into (1) a repository for each chapter (2) implementation of basic data structures required for
completing the problem sets (3) utilites to generate test cases and output the results of each executed problem set and (4) 
a list of problems I personally find more challenging relative to the other problems in each chapter.

Each chapter is further sub-divided into a directory with solutions and a directory for practice. To practice, first add your
implementation to the empty function or functions:

```javascript
const execute = require('../../../Utilities/execute-test-cases')
const getChapterAndProblem = require('../../../Utilities/chapter-and-problem')
const testCases = require('./test-cases')

// Grab the chapter and problem names.

const { chapter, problem } = getChapterAndProblem(__dirname)

// Implement solution here.

const isUniq = (str) => {

}

// Execute all test cases and print the input, output, expected value and pass/fail.

const main = () => {
  execute(isUniq, testCases, chapter, problem)
}

main()
```

Then simply run the code:

```
node practice.js
```

The results will be output to the console:
```
-----------------------------------------------------------------------------------------------
Chapter One - Arrays & Strings
-----------------------------------------------------------------------------------------------
Problem - isUniq
-----------------------------------------------------------------------------------------------
INPUT: abcdefg OUTPUT: true EXPECTED: true PASS/FAIL: PASS
INPUT: abcbefg OUTPUT: false EXPECTED: false PASS/FAIL: PASS
INPUT: OUTPUT: false EXPECTED: false PASS/FAIL: PASS
INPUT: null OUTPUT: false EXPECTED: false PASS/FAIL: PASS
-----------------------------------------------------------------------------------------------
PASSED 4/4 TEST CASES
-----------------------------------------------------------------------------------------------
```

Remember to be kind and empathetic in your interviews. This stuff isn't easy. Happy coding!

With Love,
Jesse
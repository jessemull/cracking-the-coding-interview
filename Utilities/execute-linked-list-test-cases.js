const LinkedList = require("../Data Structures/linked-list")

const print = (arg) => {
  return typeof arg === 'object' ? LinkedList.printList(arg) : arg
}

const printArray = (arr) => {
  return arr.map(arg => typeof arg === 'object' ? LinkedList.printList(arg) : arg)
}

const format = (unparsed) => {
  return Array.isArray(unparsed) ? printArray(unparsed) : print(unparsed)
}

const execute = (fxn, testCases, chapter, problem) => {
  // Grab the chapter and problem name and print them as a header.

  console.log('-----------------------------------------------------------------------------------------------')
  console.log(chapter)
  console.log('-----------------------------------------------------------------------------------------------')
  console.log(`Problem - ${problem}`)
  console.log('-----------------------------------------------------------------------------------------------')

  // Count the number of test cases that pass.

  let passedTestCasesCount = 0
  
  // For each test case execute the solution and print out the results.

  testCases.forEach(testCase => {
    // Execute the function.
    const input = testCase.input.map(arg => typeof arg === 'object' ? LinkedList.clone(arg) : arg)
    const output = fxn(...testCase.input)

    // Then quick and dirty check for equality.

    const passed = JSON.stringify(output) === JSON.stringify(testCase.expected)
    const passOrFail = passed ? 'PASS' : 'FAIL'
    
    if (passed) {
      passedTestCasesCount++
    }

    console.log(
      'INPUT:', format(input),
      'OUTPUT:', format(output), 
      'EXPECTED:', format(testCase.expected), 
      'PASS/FAIL: ' + passOrFail
    )
  })

  // Print the total number of passed test cases.

  console.log('-----------------------------------------------------------------------------------------------')
  console.log(`PASSED ${passedTestCasesCount}/${testCases.length} TEST CASES`)
  console.log('-----------------------------------------------------------------------------------------------')
}

module.exports = execute
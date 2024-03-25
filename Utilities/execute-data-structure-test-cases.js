const invoke = (dataStructure, testCase) => {
  let passedAll = true
  testCase.expected.forEach(({ method, args, expected }) => {
    const input = JSON.parse(JSON.stringify(args))
    const output = dataStructure[method](...args)
    let passed = !expected || expected(output)
    if (!passed) {
      passedAll = false
    }
    console.log(`Method: ${method} Args: ${JSON.stringify(input)}, OUTPUT: ${JSON.stringify(output)}, Assertion: ${expected}, PASS/FAIL: ${passed ? 'PASS' : 'FAIL'}`)
  })
  return passedAll
}

const execute = (dataStructure, testCases, chapter, problem) => {
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
    const passed = invoke(dataStructure, testCase)
    
    if (passed) {
      passedTestCasesCount++
    }

  })

  // Print the total number of passed test cases.

  console.log('-----------------------------------------------------------------------------------------------')
  console.log(`PASSED ${passedTestCasesCount}/${testCases.length} TEST CASES`)
  console.log('-----------------------------------------------------------------------------------------------')
}

module.exports = execute
const cloneArray = (arr) => {
  const cloned = []

  for (let i = 0; i < arr.length; i++) {
    cloned[i] = [...arr[i]]
  }

  return cloned
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
    const output = fxn(cloneArray(testCase.input))
    const passed = JSON.stringify(output) === JSON.stringify(testCase.expected)
    const passOrFail = passed ? 'PASS' : 'FAIL'
    
    if (passed) {
      passedTestCasesCount++
    }

    console.log('INPUT:', ...testCase.input, 'OUTPUT:', output, 'EXPECTED:', testCase.expected, 'PASS/FAIL: ' + passOrFail)
  })

  // Print the total number of passed test cases.

  console.log('-----------------------------------------------------------------------------------------------')
  console.log(`PASSED ${passedTestCasesCount}/${testCases.length} TEST CASES`)
  console.log('-----------------------------------------------------------------------------------------------')
}

module.exports = execute
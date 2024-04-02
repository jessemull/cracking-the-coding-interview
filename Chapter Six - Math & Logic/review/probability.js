// What is the probability of both A & B occuring?
// P(A AND B) = P(B given A) P(A)
//
// Take the example of picking a number between 1-10.
// What is the likelihood that the number is between 1-5 and also even?
//
// Using the above formula:
// P(x % 2 === 0 AND x <= 5)
// P(x % 2 === 0 GIVEN x <= 5) P(x <= 5)
// 2/5 * 1/2 = 1/5

// What is the probability of A | B occuring?
// P(A OR B) = P(A) + P(B) - P(A AND B)
// 
// Take the same example of picking a number between 1-10.
// What is the likelihood that the number is between 1-5 or even?
//
// Using the above formula:
// P(x % 2 === 0 OR x <=5)
// P(x % 2 === 0) + P(x <= 5) - P(x % 2 === 0 AND x <= 5)
// 1/2 + 1/2 - 1/5
// 1 - 1/5 = 4/5

// If P(A) and P(B) are independent they have no impact on the calculation of each events probability.
// This is distinct from mutual exclusivity where one event cannot occur if the other does not.
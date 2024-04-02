// You have a basketball hoop and can play one of two games:
// 1. One shot to make the hoop.
// 2. Three shots and you have to make 2/3 shots.
//
// If p is the probability of making a particular shot. Which values of p should you choose one game over the other?
//
// The probability of the first game is always p.
//
// In the second game, we have four different outcomes:
// (Make, Make, Miss) / (Make, Miss, Make) / (Miss, Make, Make) / (Make, Make, Make).
//
// Making all the shots is equal to p * p * p -> p^3.
//
// The probability of missing a shot would be 1 - p.
//
// So for each of the other cases we get:
// p * p * (1 - p) + p * (1 - p) * p + (1 - p) * p * p
// 
// We can simplify this:
// 3 * p^2 * (1 - p)
//
// Then add the probability of making all three and simplify again:
// p^3 + 3p^2 - 3p^3
// 3p^2 - 2p^3
//
// When p > 3p^2 - 2p^3 we should play game one.
// 1 > 3p - 2p^2
// 2p^2 - 3p + 1 > 0
// (2p - 1)(p - 1) > 0
//
// p < 1 so we know that p - 1 is negative.
// 2p - 1 < 0
// 2p < 1
// p < 0.5
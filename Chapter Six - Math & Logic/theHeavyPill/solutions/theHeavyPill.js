// 20 Bottles of pills.
// 19 Bottles have 1.0 gram pills.
// One has 1.1 gram pills.
// Using the scale only once, how do you find the bottle with the heavy pills.
//
// We can just use different number of pills from each jar to figure out which one
// has the heavier pills.
//
// Take the case where we have just three bottles and one is heavier.
//
// Add one pill from one.
// Add two pills from one.
// Add three pills from one.
//
// If all of the pills are equal weight we would get:
// 1g + 2g + 3g = 6g
//
// If the first bottle was heavier we would get:
// 1.1g + 2g + 3g = 6.1g
//
// If the second bottle was heavier we would get:
// 1g + 2.2g + 3g = 6.2g
//
// If the last bottle was heaviest we would get:
// 1g + 2g +3.3g = 6.3g
//
// We can see that the actual weighed value minus the expected value if they were all the same provides the bottle number:
// Actual -> 1g + 2.2g + 3g = 6.2g
// Expected w/ Same Weight -> 1g + 2g + 3g = 6g
// Bottle Number -> 6.2g - 6.0g / (1.1g - 1g) = 2
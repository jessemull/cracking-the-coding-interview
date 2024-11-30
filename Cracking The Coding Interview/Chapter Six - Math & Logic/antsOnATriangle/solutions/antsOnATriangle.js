// Each ant can choose one of two directions. Thus we have the cases below.
//
// (Left, Left, Left) -> No collisions.
// (Right, Right, Right) -> No collisions.
// (Left, Right Right) -> Collision.
// (Right, Left, Right) -> Collision.
// (Right, Right, Left) -> Collision.
// (Right, Left, Left) -> Collision.
// (Left, Right, Left) -> Collision.
// (Left, Left, Right) -> Collision.
//
// Seems like from the above the only way that the ants can avoid all running into each other is if they all choose the same direction.
// Choosing the same direction is independent for each ant so we can add them all together.
//
// The probability of choosing left (or right) is 1/2 so we get:
// All choose left -> 1/2 + 1/2 + 1/2 = 1/2^3
// All choose right -> 1/2 + 1/2 + 1/2 = 1/2^3
//
// These are also independent events so we can now add those together to get the answer:
// 1/2^3 + 1/2^3 = 2(1/2)^3 = 2 (1/8) = 2/8 = 1/4
//
// On the n-vertex polygon the ants must all move in exactly the same direction again so that doesn't change
// but they are provided with many more choices about which way to move.
//
// All move in one direction one way -> (1/2)^n
// All move the other way -> (1/2)^n
//
// Add them together and simplify...
// 2 (1/2)^n = (1/2)^(n - 1)
//
// Then to calculate the chances of collision by subtracting from one...
// 1 - (1/2)^(n - 1)

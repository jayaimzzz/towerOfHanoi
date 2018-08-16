
// 2
// down vote
// After reading all these explanations I thought I'd weigh in with the method my professor used to explain the Towers of Hanoi recursive solution. Here is the algorithm again with n representing the number of rings, and A, B, C representing the pegs. The first parameter of the function is the number of rings, second parameter represents the source peg, the third is the destination peg, and fourth is the spare peg.

// procedure Hanoi(n, A, B, C);
//   if n == 1
//     move ring n from peg A to peg B
//   else
//     Hanoi(n-1, A, C, B);
//     move ring n-1 from A to C
//     Hanoi(n-1, C, B, A);
// end;
// I was taught in graduate school to never to be ashamed to think small. So, let's look at this algorithm for n = 5. The question to ask yourself first is if I want to move the 5th ring from A to B, where are the other 4 rings? If the 5th ring occupies peg A and we want to move it to peg B, then the other 4 rings can only be on peg C. In the algorithm above the function Hanoi (n-1, A, C, B) is trying to move all those 4 other rings on to peg C, so ring 5 will be able to move from A to B. Following this algorithm we look at n = 4. If ring 4 will be moved from A to C, where are rings 3 and smaller? They can only be on peg B. Next, for n = 3, if ring 3 will be moved from A to B, where are rings 2 and 1? On peg C of course. If you continue to follow this pattern you can visualize what the recursive algorithm is doing. This approach differs from the novice's approach in that it looks at the last disk first and the first disk last.

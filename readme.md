Daily Algorithm Practice
===
My approach is to collect algorithms from various existing repositories and other online resources and come up with my own solutions.

#### Languages
- python, javascript, eventually golang

#### Target topics
- Basic Syntax 
- Binary Search
- Binary Search Tree
- Binary Tree
- Famous Algorithms
- Dynamic Programming (Kadane's Algorithm)
- Tries (N-array trees)
- Graph(Dijkstra, Union Find, Kruskal, Prim's, Minimum Spanning Tree, Topological Ordering, etc.)
- Strings
- Stacks
- Queue
- Arrays
- Sorting
- Hash Table
- Heap
- Linked list
- Bit Operation
- Recursion
- Backtracking(Permutations & Combinations & Subsets...etc)
- Math

#### Questions from the following:
- [AlgoDaily](https://algodaily.com/)
- [HackerRank](https://www.hackerrank.com)
- [AlgoExpert](https://www.algoexpert.io/questions)
- [Leetcode](https://leetcode.com)
- [Project Euler](https://projecteuler.net)
- [Google Code Jam](https://codingcompetitions.withgoogle.com/codejam)
- [Google Kick Start](https://codingcompetitions.withgoogle.com/kickstart/)
- Interviews
- ...


#### Started since Thursday, April 25, 2019

| Day  | Task | Type | From | remarks |
| --- | --- | --- | --- | --- |
| 1 | [binary search](/solutions/binarysearch.py) | binary search | [leetcode 704](https://leetcode.com/problems/binary-search) | [Bisection method](https://docs.python.org/2/library/bisect.html), O(log n) time complexity for binary search method |
| 2 | [sqrt(x)](/solutions/sqrt.py) | binary search | [leetcode 69](https://leetcode.com/problems/sqrtx/) | This was just making a square root|
| 3 | [search in rotated sorted array](/solutions/rotatedsortedarray.py) | binary search | [leetcode 33](https://leetcode.com/problems/search-in-rotated-sorted-array) | Need to review how the logic works here |
| 4 | [two sum (python)](solutions/two-sum.py) </br> </br> [two sum (javascript)](solutions/two-sum.js)| find indices of two elements that make a sum | [leetcode 1](https://leetcode.com/problems/two-sum/) | 1. the some() function works similarly to python's in, it checks a list for a target value and exits if true is returned. </br> 2. I learned that when making an arrow function, the parameters specified (a,b,c) correspond to (current element, index of element, and current containing array). </br> 3. I learned about the javascript Map object, which uses the has(), get(), and set() methods. |
| 5 | [add two numbers (javascript)](/solutions/addtwonumbers.js) | You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list. | [leetcode 2](https://leetcode.com/problems/add-two-numbers) | Added a naïve solution, will update after researching a more efficient solution. |
| 6 | [game of life (javascript)](/solutions/gameoflife.js) | Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article). | [leetcode 289](https://leetcode.com/problems/game-of-life/) | Added a naïve solution - there is not really many ways to improve on this it seems. |
| 7 | [longest palindromic substring (javascript)](/solutions/longestpalindromicss.js) | Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000. | [leetcode 5](https://leetcode.com/problems/longest-palindromic-substring/) | In the naïve solution, I coded a palindrome checker that checked by converging to the middle, the solution given in discussion uses checks during the iteration and is faster as a result. |
| 8 | [atoi, ascii to integer (javascript)](/solutions/atoi.js) | Essentially, implement the parseInt() method. | [leetcode 8](https://leetcode.com/problems/string-to-integer-atoi/) | A lot of good shorthand tricks in this one, good to review for loops and the charCodeAt() method. | 
| 9 | [longest substring without repeating characters(javascript)](/solutions/norepeatchars.js) | Given a string, find the length of the longest substring without repeating characters. | [leetcode 3](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | In the naïve solution, I created a map, and then updated the entries in the map as I iterated over the string. An important note is that if you hit a duplicated string, you have to reset the other entries that the duplicate breaks. For instance "abcb", the second "b" resets both the "a" and "b" count, but not the "c" count, which is updated to 2. |
| 10 | [roman numeral to integer (javascript)](/solutions/romantoint.js) | Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999. | [leetcode 13](https://leetcode.com/problems/roman-to-integer/) | Solved with decent time complexity on the first try. |
| 11 | [integer to roman numeral (javascript)](/solutions/inttoroman.js) | Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999. | [leetcode 12](https://leetcode.com/problems/integer-to-roman/) | This one was slightly more challenging than the previous one. It was the same concept, but just involved a bit more manipulation. | 
| 12 | [valid parentheses (javascript)](/solutions/validparentheses.js) | Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. | [leetcode 20](https://leetcode.com/problems/valid-parentheses/) | Need to review parentheses problem types - this easy one tripped me up. TODO: Review the stack solution and review the faster solution. |

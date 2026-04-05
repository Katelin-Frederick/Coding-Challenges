# Template

Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays of numbers, check whether they are similar.

###### Example 1:

```
Input: arr1 = [1, 2, 3] and arr2 = [1, 2, 3]
Output: true
```

###### Example 2:

```
Input: arr1 = [1, 2, 3] and arr2 = [2, 1, 3]
Output: true
Explanation: We can obtain arr2 from arr1 by swapping 2 and 1 in arr2.
```

###### Example 3:

```
Input: arr1 = [1, 2, 2] and arr2 = [2, 1, 1]
Output: false
Explanation: Any swap of any two elements either in arr1 or in arr2 won't make arr1 and arr2 equal.
```

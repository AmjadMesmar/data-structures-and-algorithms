# Insertion Sort

Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

## Pseudocode

        InsertionSort(int[] arr)
        
            FOR i = 1 to arr.length
            
            int j <-- i - 1
            int temp <-- arr[i]
            
            WHILE j >= 0 AND temp < arr[j]
                arr[j + 1] <-- arr[j]
                j <-- j - 1
                
            arr[j + 1] <-- temp

## Trace

- Sample array: [5,-1,10,3]

### pass1

### pass2

### pass3

## Verification

![test](./insertion-sort-test.png)

## Efficency

1. Time complexity:   Time:  O(N²).
The basic operation of this algorithm is comparison. This will happen n * (n-1) number of times…concluding the algorithm to be n squared.

2. Space complexity:   Space: O(1).
No additional space is being created. This array is being sorted in place…keeping the space at constant O(1).

# Sort

In computer science, merge sort is an efficient, general-purpose, and comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the order of equal elements is the same in the input and output.

## Pseudocode

    ALGORITHM Mergesort(arr)
        DECLARE n <-- arr.length
            
        if n > 1
        DECLARE mid <-- n/2
        DECLARE left <-- arr[0...mid]
        DECLARE right <-- arr[mid...n]
        // sort the left side
        Mergesort(left)
        // sort the right side
        Mergesort(right)
        // merge the sorted left and right sides together
        Merge(left, right, arr)

    ALGORITHM Merge(left, right, arr)
        DECLARE i <-- 0
        DECLARE j <-- 0
        DECLARE k <-- 0

        while i < left.length && j < right.length
            if left[i] <= right[j]
                arr[k] <-- left[i]
                i <-- i + 1
            else
                arr[k] <-- right[j]
                j <-- j + 1
                
            k <-- k + 1

        if i = left.length
        set remaining entries in arr to remaining values in right
        else
        set remaining entries in arr to remaining values in left

## Trace

- Sample array: [5,-1,6,10,3]

### pass 1

![pass](./pass1.png)

1. Mid equals array.length/2.
2. Array will split into left and right arrays.

### pass 2

![pass](./pass2.png)

- Both left an right arrays will keep splitting each element alone.

### pass3

![pass](./pass3.png)

- Both array values will start merge together and being sorted until the array become fully sorted.

## Verification

![test](./merge-sort-test.png)

## Efficency

1. ***mergeSort(arr)*** ->         Time:  O(N).
                                   Space: O(N).

2. ***merge(left,rigth)*** ->      Time:  O(N).
                                   Space: O(N).

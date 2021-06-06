# BinaryTree

## Challenge Summary

1- Create a Node class.
2- Create a BinaryTree Class with the following method:

- findMaximumValue();
***Finds the maximum value inside the tree***

## Whiteboard Process

![Whiteboard](./findMaximumValue-whiteboard.jpg)

## Approach & Efficiency

### BigO:

1. ***findMaximumValue()*** -> Time: O(N).
                               Space: O(1)

## Solution

### Example:

        let node1 = new Node(1);
        let node2 = new Node(2);
        let node3 = new Node(3333);
        let node4 = new Node(14);
        let node5 = new Node(51);
        let node6 = new Node(-5);


        let melon = new BinarySearchTree();

        melon.add(node1);
        melon.add(node2);
        melon.add(node3);
        melon.add(node4);
        melon.add(node5);
        melon.add(node6);

        console.log(melon.findMaximumValue());


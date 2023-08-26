/**
 * Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.*/


/** Solution Approach by @aesha98
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let curNode = head;
    let size = 0;

    /*while not at the end of list*/
    while (curNode) {
        curNode = curNode.next;
        size++; //total size list
    }

    size /= 2; //divide in half
    if (size % 1) { mid = Math.round(size) - 1; } //nearest whole num
    else { mid = size; }; //

    /*Go to middle node*/
    let findMidNode = head;
    while (findMidNode) {
        if (counter == mid) { break }; //stop when reach middle node
        findMidNode = findMidNode.next;
    }

    //return list from middle node and onwards
    return findMidNode;
}
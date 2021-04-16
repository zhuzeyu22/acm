// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
      this.val = (val === undefined ? 0 : val);
      this.next = (next === undefined ? null : next);
    }
}

export function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (head == null || head.next == null) {
    return head;
  }
  let list = [];
  while (head) {
    list.push(head);
    head = head.next;
  }
  list.slice(-1)[0].next = list[0];
  k = list.length - (k % list.length);

  list = list.slice(k).concat(list.slice(0, k));

  list.pop().next = null;

  return list[0];
};

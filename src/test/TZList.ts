import {ZLinkedList} from '@/struct/ZLinkedList';
const list = new ZLinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);

const a = list.find(3);
console.log(a);

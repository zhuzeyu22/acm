// 暂略 先学习二叉树再学习 ST表
// ST表 的 优势在于 O(1) 的查询 优于 树状数组 O(log(n)) 的查询
// table[i][j] = op[ i, i + 2^i - 1 ]
export class ZSparseTable<T> {
  table : Array<Array<T>>

  constructor() {
    // this.table = [][]
  }

  // 预处理
}

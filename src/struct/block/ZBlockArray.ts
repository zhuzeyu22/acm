import {sort} from '@/sort/selection';

export class ZBlockArray {
    number: number
    st: Array<number>
    ed: Array<number>
    size: Array<number>
    belong: Array<number>
    data: Array<number>
    dlt: Array<number> // 块运算

    constructor(n: number) {
      this.number = Math.floor(Math.sqrt(n));

      this.st = new Array<number>(this.number);
      this.ed = new Array<number>(this.number);
      this.size = new Array<number>(this.number);
      this.belong = new Array<number>(n);
      this.data = new Array<number>(n);
      this.dlt = new Array<number>(this.number).fill(0);

      for (let i = 0; i <= this.number; i++) {
        this.st[i] = n / this.number * i;
        this.ed[i] = n / this.number * (i + 1) - 1;
      }

      this.ed[this.number] = n;
      this.size.forEach((s, i) => {
        for (let j = this.st[i]; j <= this.ed[i]; j++) {
          this.belong[j] = i;
        }
        this.size[i] = this.ed[i] - this.st[i] + 1;
      });
    }

    update(index: number) {
      const st = this.st[index];
      const ed = this.ed[index];
      this.data.splice(st, ed - st, ...sort(this.data.slice(st, ed)));
    }

    modify(l: number, r: number, c: number) {
      const x = this.belong[l];
      const y = this.belong[r];
      if (x === y) {
        for (let i = l; i <= r; i++) {
          this.data[i] += c;
        }
        this.update(x);
        return;
      }

      for (let i = l; i <= this.ed[x]; i++) {
        this.data[i] += c;
      }
      for (let i = this.st[y]; i <= r; i++) {
        this.data[i] += c;
      }
      for (let i = x + 1; i < y; i++) {
        this.dlt[i] += c;
      }
      this.update(x);
      this.update(y);
    }

    // 查询大于等于一个数的个数
    answer(l:number, r:number, c:number) {
      let ans = 0;
      const x = this.belong[l];
      const y = this.belong[r];
      if (x === y) {
        this.data.slice(l, r).forEach((d, i)=>{
          if (this.data[i] + this.dlt[x] >= c) {
            ans ++;
          }
        });
        return ans;
      }


      for (let i = l; i <= this.ed[x]; i++) {
        if (this.data[i] + this.dlt[x] >= c) {
          ans ++;
        }
      }
      for (let i = this.st[y]; i <= r; i++) {
        if (this.data[i] + this.dlt[x] >= c) {
          ans ++;
        }
      }

      for (let i = x + 1; i < y; i++) {
        const find =this.data.slice(this.st[i], this.ed[i])
            .findIndex((d)=> (d + this.dlt[i]) >= c);
        ans += find !== -1 ? this.size[i] - find : 0;
      }
    }
}

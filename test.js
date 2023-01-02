class Dep {
  constructor() {
    this.subs = [];
  }
  depend() {
    if (Dep.target) {
      this.subs.push(Dep.target);
    }
  }
  notify() {
    for (let i = 0; i < this.subs.length; i++) {
      const sub = this.subs[i];
      sub();
    }
  }
}

class Watcher {
  constructor(getter) {
    this.getter = getter;
    this.get();
  }

  get() {
    Dep.target = this.getter;
    this.getter();
    Dep.target = null;
  }
}

function walk(data) {
  const keys = Object.keys(data);
  for (let i = 0; i < keys.length; i++) {
    defineReactive(data, keys[i]);
  }
}

function defineReactive(obj, key) {
  const dep = new Dep();
  let val = obj[key];

  Object.defineProperty(obj, key, {
    get() {
      dep.depend();
      return val;
    },
    set(newVal) {
      if (val === newVal) {
        return;
      }
      val = newVal;
      dep.notify();
      console.log("notify");
    },
  });
}

const data = { a: 1, b: 2 };
walk(data);

let sum = 0;
const watcher = new Watcher(() => {
  sum = data.a + data.b;
});

console.log(sum); // 3
data.a = 7;
console.log(sum); // 9

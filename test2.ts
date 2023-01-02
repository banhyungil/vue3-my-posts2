function max(collection: Array<number>) {
  if (collection.length == 0) return null;

  return Math.max(...collection);
}

const result = max([3, 2, 1, 4, 5, 9, 4, 0]);
console.log("result ", result);

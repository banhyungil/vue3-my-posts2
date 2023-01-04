export default {
  max(collection: Array<number>) {
    if (collection.length == 0) return null;

    return Math.max(...collection);
  },
};

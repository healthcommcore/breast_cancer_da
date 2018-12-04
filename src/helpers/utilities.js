const toInt = (num) => {
  return parseInt(num, 10);
}

const exists = (val) => {
  return val !== undefined;
}

const numArray = (scale) => {
  const limit = parseInt(scale, 10) + 1;
  return Array.from({ length: limit }, (item, i) => i);
}

export { toInt, exists, numArray };

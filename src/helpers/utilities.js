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

const propify = (words) => {
  return words.toLowerCase().split(" ").slice(0, 2).join("_");
}

const makeSessionId = () => {
  const length = 10;
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const sessionid = [];
  for(let i = 0; i < length; i++) {
    const index = Math.floor( Math.random() * Math.floor(chars.length));
    sessionid.push(chars[index]);
  }
  return sessionid.join("");
}

export { toInt, exists, numArray, propify, makeSessionId };

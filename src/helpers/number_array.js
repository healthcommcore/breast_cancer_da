export default (scale) => {
  const limit = parseInt(scale, 10) + 1;
  return Array.from({ length: limit }, (item, i) => i);
}

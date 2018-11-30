export default (scale) => {
  const limit = parseInt(scale) + 1;
  return Array.from({ length: limit }, (item, i) => i);
}

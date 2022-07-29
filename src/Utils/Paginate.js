export function paginate(item, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = pageNumber * pageSize;

  return item.slice(startIndex, endIndex);
}

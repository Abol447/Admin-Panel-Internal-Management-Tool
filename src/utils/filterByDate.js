export default function filterByDate(id, value, data) {
  return data.filter((item) => {
    const year = new Date(item[id]).getFullYear();
    return year === value;
  });
}

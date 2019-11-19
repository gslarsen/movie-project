export const formatBudget = num =>
  String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const formatRuntime = time => {
  debugger;
  let hours = Math.floor(time / 60);
  let minutes = time / 60;
  return `${hours} hours ${((minutes - hours) * 60).toFixed(0)} minutes`;
};

export const chunk = (arr, size) => {
  let chunked = [];
  let i = 0;
  while (i < arr.length) {
    chunked.push(arr.slice(i, i + size));
    i += size;
  }
  return chunked;
};

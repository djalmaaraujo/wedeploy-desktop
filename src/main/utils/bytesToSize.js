const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

export default (x) => {
  let l = 0, n = parseInt(x, 10) || 0;
  while (n >= 1024) {
    n = n / 1024;
    l++;
  }
  return (n.toFixed(n >= 10 || l < 1 ? 0 : 1) + ' ' + units[l]);
}

export function formatDate(d) {
  const day = d.getDate();
  const month = d.toLocaleString('default', { month: 'short' });
  const year = d.getFullYear();

  return `${month} ${day}, ${year}`;
}

export function objToGETString(obj) {
  let str = '';
  for (const key in obj) {
    const item = obj[key];
    if (Array.isArray(item)) {
      str += (str) ? '&' : '';
      str += `${key}=${(key === 'query') ? item : encodeURIComponent(JSON.stringify(item))}`;
    } else if (['string', 'number'].includes(typeof item)) {
      str += (str) ? '&' : '';
      str += `${key}=${(key === 'query') ? item : encodeURIComponent(item)}`;
    }
  }
  return str;
}

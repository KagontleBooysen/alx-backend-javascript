export default function iterateThroughObject(reportWithIterator) {
  let st = '';
  for (const idx of reportWithIterator) {
    if (idx === reportWithIterator[0]) {
      st = idx;
      // eslint-disable-next-line
            continue;
    }
    st = `${st} | ${idx}`;
  }
  return st;
}

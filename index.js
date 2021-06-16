export const IsNotArrayError = new Error('Numbers is not an array');
export const IsNotIntegerArray = new Error('Array must contains only integer numbers');

export default (numbers = []) => {
  if (!Array.isArray(numbers)) {
    throw IsNotArrayError;
  }

  if (numbers.length === 0) {
    return '';
  }

  let start, end;
  const intervals = [];

  numbers.forEach((val, idx) => {
    if (!Number.isInteger(val)) {
      throw IsNotIntegerArray;
    }

    if (idx === 0) {
      start = val;
      end = val;
      return;
    }

    if (val === end + 1) {
      end = val;
      return;
    }

    if (start === end) {
      intervals.push(String(start));
    } else if (end - start === 1) {
      intervals.push(String(start), String(end));
    } else {
      intervals.push(`${start}-${end}`);
    }

    start = val;
    end = val;
  });

  if (start === end) {
    intervals.push(String(start));
  } else if (end - start === 1) {
    intervals.push(String(start), String(end));
  } else {
    intervals.push(`${start}-${end}`);
  }

  return intervals.join(',');
};

const lcsF = (
  arrayLeft: string[],
  arrayRight: string[],
  sizeOne: number,
  sizeTwo: number,
  memoization: number[][],
): number => {
  if (sizeOne === 0 || sizeTwo === 0) {
    return 0;
  }
  if (memoization[sizeOne - 1][sizeTwo - 1] !== -1) {
    return memoization[sizeOne - 1][sizeTwo - 1];
  }
  if (arrayLeft[sizeOne - 1] === arrayRight[sizeTwo - 1]) {
    memoization[sizeOne - 1][sizeTwo - 1] =
      1 + lcsF(arrayLeft, arrayRight, sizeOne - 1, sizeTwo - 1, memoization);
    return memoization[sizeOne - 1][sizeTwo - 1];
  }
  memoization[sizeOne - 1][sizeTwo - 1] = Math.max(
    lcsF(arrayLeft, arrayRight, sizeOne, sizeTwo - 1, memoization),
    lcsF(arrayLeft, arrayRight, sizeOne - 1, sizeTwo, memoization),
  );
  return memoization[sizeOne - 1][sizeTwo - 1];
};

const lcs = (
  arrayLeft: string[],
  arrayRight: string[],
  sizeOne: number,
  sizeTwo: number,
): number => {
  const memoization: number[][] = [];

  for (let i = 0; i < arrayLeft.length + 1; i += 1) {
    const aux: number[] = [];
    for (let j = 0; j < arrayRight.length + 1; j += 1) {
      aux.push(-1);
    }
    memoization.push(aux);
  }
  return lcsF(arrayLeft, arrayRight, sizeOne, sizeTwo, memoization);
};

export default lcs;

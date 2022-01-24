// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
const combineArrays = <T extends unknown>(...arrays: T[][]): T[] | T[][] => {
  const combinations: T[] = [];

  if (arrays.length === 0) return [];
  if (arrays.length === 1) return arrays[0];

  if (arrays.length === 2) {
    arrays[0].forEach((value1) => {
      arrays[1].forEach((value2) => {
        combinations.push([value1, value2].flat() as unknown as T);
      });
    });

    return combinations;
  }

  return combineArrays(arrays[0], combineArrays(...arrays.slice(1)) as T[]);
};

export default combineArrays;

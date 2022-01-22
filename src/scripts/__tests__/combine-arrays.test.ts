import combineArrays from '../combine-arrays';

describe('Combine arrays', () => {
  const A = ['티셔츠', '바지'];
  const B = ['블랙', '그레이', '베이지'];
  const C = ['S', 'M', 'L'];

  it((`Combine 2 arrays ${JSON.stringify(A)}, ${JSON.stringify(B)}`), () => {
    expect(combineArrays(A, B))
      .toStrictEqual([
        ['티셔츠', '블랙'],
        ['티셔츠', '그레이'],
        ['티셔츠', '베이지'],
        ['바지', '블랙'],
        ['바지', '그레이'],
        ['바지', '베이지'],
      ]);
  });

  it((`Combine 3 arrays ${JSON.stringify(A)}, ${JSON.stringify(B)}, ${JSON.stringify(C)}`), () => {
    expect(combineArrays(A, B, C))
      .toStrictEqual([
        ['티셔츠', '블랙', 'S'],
        ['티셔츠', '블랙', 'M'],
        ['티셔츠', '블랙', 'L'],
        ['티셔츠', '그레이', 'S'],
        ['티셔츠', '그레이', 'M'],
        ['티셔츠', '그레이', 'L'],
        ['티셔츠', '베이지', 'S'],
        ['티셔츠', '베이지', 'M'],
        ['티셔츠', '베이지', 'L'],
        ['바지', '블랙', 'S'],
        ['바지', '블랙', 'M'],
        ['바지', '블랙', 'L'],
        ['바지', '그레이', 'S'],
        ['바지', '그레이', 'M'],
        ['바지', '그레이', 'L'],
        ['바지', '베이지', 'S'],
        ['바지', '베이지', 'M'],
        ['바지', '베이지', 'L'],
      ]);
  });
});

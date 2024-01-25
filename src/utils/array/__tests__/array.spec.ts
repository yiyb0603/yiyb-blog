import chunkArray from '../chunkArray';

describe('Array 유틸함수 테스트', () => {
  describe('chunkArray 함수 테스트', () => {
    it('perItems로 넘긴 단위마다 끊어서 2차원 배열을 생성한다.', () => {
      const result = chunkArray({
        items: [1, 2, 3, 4],
        perItems: 2,
      });

      expect(result).toStrictEqual([
        [1, 2],
        [3, 4],
      ]);
      expect(result).not.toStrictEqual([[1, 2, 3, 4]]);
      expect(result).not.toStrictEqual([[1, 2, 3], [4]]);
    });

    it('배열의 길이가 perItems와 나누어 떨어지지 않을때 나머지 요소가 마지막 배열에 위치한다.', () => {
      const result = chunkArray({
        items: ['A', 'B', 'C', 'D', 'E'],
        perItems: 3,
      });

      expect(result).toStrictEqual([
        ['A', 'B', 'C'],
        ['D', 'E'],
      ]);

      expect(result).not.toStrictEqual(['A', 'B', 'C', 'D', 'E']);
    });
  });
});

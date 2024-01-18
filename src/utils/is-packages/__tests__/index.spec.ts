import isEmpty from '../isEmpty';
import isServer from '../isServer';

describe('is-package 유틸리티 함수 테스트', () => {
  describe('isEmpty 함수 테스트', () => {
    it('falsy한 값들에 대해서 true를 반환한다.', () => {
      expect(isEmpty(0)).toStrictEqual(true);
      expect(isEmpty('')).toStrictEqual(true);
      expect(isEmpty(null)).toStrictEqual(true);
      expect(isEmpty(undefined)).toStrictEqual(true);

      expect(isEmpty('hello')).toStrictEqual(false);
      expect(isEmpty(1)).toStrictEqual(false);
    });

    it('공백만 존재하는 문자열에 대해서 true를 반환한다.', () => {
      expect(isEmpty('    ')).toStrictEqual(true);

      expect(isEmpty('hello')).toStrictEqual(false);
    });

    it('빈 배열에 대해서 true를 반환한다.', () => {
      expect(isEmpty([])).toStrictEqual(true);

      expect(isEmpty([1, 2])).toStrictEqual(false);
    });
  });

  describe('isServer 함수 테스트', () => {
    it('window 객체가 undefined일때 true를 반환한다.', () => {
      Object.defineProperty(global, 'window', {
        value: undefined,
      });

      expect(isServer()).toStrictEqual(true);
    });
  });
});

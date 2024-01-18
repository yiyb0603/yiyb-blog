import dotenv from '@/libs/dotenv';
import camelToKebab from '../camelToKebab';
import generateFullURL from '../generateFullURL';
import hexToRGB from '../hexToRGB';
import removeHTMLString from '../removeHTMLString';

describe('string 유틸함수 테스트', () => {
  describe('camelToKebab 함수 테스트', () => {
    it('camelCase 형태의 문자열을 kebab-case 형태로 변경한다.', () => {
      expect(camelToKebab('camelCase')).toStrictEqual('camel-case');
      expect(camelToKebab('camelcase')).toStrictEqual('camelcase');
    });
  });

  describe('generateFullURL 함수 테스트', () => {
    it('전달한 pathname이 붙은 전체 URL을 반환한다.', () => {
      expect(generateFullURL('/login')).toStrictEqual(
        `${dotenv.APP_URL}/login`,
      );
      expect(generateFullURL('/posts/1')).toStrictEqual(
        `${dotenv.APP_URL}/posts/1`,
      );
    });

    it('전달한 pathname이 메인(/) 경로일때 hostname 까지만 반환된다.', () => {
      expect(generateFullURL('/')).toStrictEqual(dotenv.APP_URL);
    });
  });

  describe('hexToRGB 함수 테스트', () => {
    it('hex 문자열의 컬러 코드를 RGB 객체로 반환한다.', () => {
      expect(hexToRGB('#000000')).toStrictEqual({
        red: 0,
        green: 0,
        blue: 0,
      });

      expect(hexToRGB('#fc0324')).toStrictEqual({
        red: 252,
        green: 3,
        blue: 36,
      });
    });
  });

  describe('removeHTMLString 함수 테스트', () => {
    it('문자열에 들어간 HTML 태그를 모두 제거한다.', () => {
      expect(removeHTMLString('<h1>글 제목</h1>')).toStrictEqual('글 제목');
      expect(
        removeHTMLString('<div>안녕하세요. <span>반가워요.</span></div>'),
      ).toStrictEqual('안녕하세요. 반가워요.');
    });

    it('문자열에 들어간 HTML 특수문자 코드를 모두 변경한다.', () => {
      expect(removeHTMLString('안녕하세요 &#126;')).toStrictEqual(
        '안녕하세요 ~',
      );
      expect(
        removeHTMLString('<h1>오늘의 뉴스 &#40;한시간 전 기준&#41;</h1>'),
      ).toStrictEqual('오늘의 뉴스 (한시간 전 기준)');
    });
  });
});

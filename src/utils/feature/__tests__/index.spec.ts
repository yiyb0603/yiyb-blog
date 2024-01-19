import copyToClipboard from '../copyToClipboard';

describe('feature 유틸리티 함수 테스트', () => {
  describe('copyToClipboard 함수 테스트', () => {
    const setupNavigator = (userAgent: string): void => {
      Object.defineProperties(global.document, {
        execCommand: {
          value: jest.fn(),
          configurable: true,
        },
      });

      Object.defineProperties(global.navigator, {
        userAgent: {
          value: userAgent,
          configurable: true,
        },
        clipboard: {
          value: {
            writeText: jest.fn(),
          },
          configurable: true,
        },
      });
    };

    afterEach(() => {
      Object.defineProperties(global.document, {});
      Object.defineProperties(global.navigator, {});
    });

    it('일반적인 브라우저에서는 navigator.clipboard.writeText 메소드를 실행하여 복사한다.', async () => {
      setupNavigator(
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0',
      );

      const text = 'hello world!';

      await copyToClipboard(text);

      expect(global.navigator.clipboard.writeText).toHaveBeenCalledWith(text);
    });

    it('카카오 브라우저에서는 DOM API로 직접 구현한 로직을 실행하여 복사한다.', async () => {
      setupNavigator('Mozilla/5.0 Kakaotalk');

      const text = 'hello world';

      await copyToClipboard(text);

      expect(global.document.execCommand).toHaveBeenCalled();
      expect(global.navigator.clipboard.writeText).not.toHaveBeenCalledWith(
        text,
      );
    });
  });
});

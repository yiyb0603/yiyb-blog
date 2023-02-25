import useStyledTheme from '@/hooks/theme/useStyledTheme';
import Section from '@/components/Common/Section';
import Text from '@/components/Common/Text';
import Flex from '@/components/Common/Flex';

const WelcomeBlog = (): JSX.Element => {
  const {
    color,
    fontFamily,
    fontSize,
  } = useStyledTheme();

  return (
    <Section
      tagName='div'
    >
      <Flex
        tagName='div'
        flexDirection='column'
        gap='1.25rem'
      >
        <Text
          tagName='h1'
          fontSize={fontSize.LARGE}
        >
          Welcome to yiyb-blog 🖐️
        </Text>

        <Section
          tagName='div'
          padding='1.5rem'
          borderRadius='0.5rem'
          backgroundColor={color.main100}
        >
          <Text
            tagName='p'
            wordBreak='keep-all'
            fontSize={fontSize.NORMAL}
            fontFamily={fontFamily.pretendard.MEDIUM}
            color={color.black}
            lineHeight='1.6'
            letterSpacing='-0.2px'
          >
            권용빈의 블로그에 오신것을 환영합니다. 이곳에는 개발뿐만이 아닌, 다양한 카테고리의 글들이 올라올 예정입니다.
            재미있게 봐주세요. 😀
          </Text>
        </Section>

        {/* <Flex
          tagName='div'
          gap='1rem'
          flexWrap='wrap'
        >
          {
            snsList.map(({
              platform,
              link,
            }) => (
              <HyperLink
                key={platform}
                external
                anchor={{
                  href: link,
                  target: '_blank',
                  rel: 'noopener noreferrer'
                }}
                fontSize={fontSize.MEDIUM}
                fontFamily={fontFamily.pretendard.MEDIUM}
                color={color.main}
              >
                {platform}
              </HyperLink>
            ))
          }
        </Flex> */}
      </Flex>
    </Section>
  );
}

export default WelcomeBlog;
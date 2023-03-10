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
          Welcome to yiyb-blog ποΈ
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
            κΆμ©λΉμ λΈλ‘κ·Έμ μ€μ κ²μ νμν©λλ€. μ΄κ³³μλ κ°λ°λΏλ§μ΄ μλ, λ€μν μΉ΄νκ³ λ¦¬μ κΈλ€μ΄ μ¬λΌμ¬ μμ μλλ€.
            μ¬λ―Έμκ² λ΄μ£ΌμΈμ. π
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
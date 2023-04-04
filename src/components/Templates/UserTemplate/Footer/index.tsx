import useStyledTheme from '@/hooks/theme/useStyledTheme';
import { snsList } from '@/libs/models/sns';
import Flex from '@/components/Common/Flex';
import Text from '@/components/Common/Text';
import HyperLink from '@/components/Common/HyperLink';
import Section from '@/components/Common/Section';

const Footer = (): JSX.Element => {
  const {
    color,
    fontSize,
    fontFamily,
  } = useStyledTheme();

  return (
    <Section
      tagName='footer'
      border={{
        top: `1px solid ${color.border2}`,
      }}
    >
      <Section
        tagName='div'
        width='100%'
        maxWidth='768px'
        margin='0 auto'
        padding='3rem'
      >
        <Flex
          tagName='div'
          gap='2rem'
          justifyContent='center'
          margin='0 0 1.25rem 0'
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
                fontSize={fontSize.NORMAL}
                color={color.main}
              >
                {platform}
              </HyperLink>
            ))
          }
        </Flex>

        <Text
          tagName='p'
          textAlign='center'
          fontSize={fontSize.NORMAL}
          wordBreak='keep-all'
        >
          Copyright ©2023 yiyb0603 All rights reserved.
        </Text>
      </Section>
    </Section>
  );
}

export default Footer;
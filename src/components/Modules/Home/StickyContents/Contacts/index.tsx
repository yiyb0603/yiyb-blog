import { css } from 'styled-components';
import useStyledTheme from '@/hooks/theme/useStyledTheme';
import { snsList } from '@/libs/models/sns';
import Flex from '@/components/Common/Flex';
import HyperLink from '@/components/Common/HyperLink';
import Section from '@/components/Common/Section';
import Text from '@/components/Common/Text';

const Contacts = (): JSX.Element => {
  const {
    color,
    fontSize,
  } = useStyledTheme();

  return (
    <Section
      tagName='div'
      flex='1'
    >
      <Text
        tagName='h2'
        fontSize={fontSize.MEDIUM}
        margin='0 0 1.25rem 0'
      >
        📩 Contacts
      </Text>

      <Section
        tagName='div'
      >
        <Flex
          tagName='ul'
          gap='1rem'
          flexDirection='column'
        >
          {
            snsList.map(({
              platform,
              link,
              icon: Icon,
            }) => (
              <HyperLink
                key={platform}
                external
                anchor={{
                  href: link,
                  target: '_blank',
                }}
                padding='1.25rem 1.75rem'
                borderRadius='5px'
                color={color.contrast}
                backgroundColor={color.background3}
                hover={css`
                  transition: all 0.15s ease-in-out;
                  color: ${color.white};
                  background-color: ${color.main};
                `}
              >
                <Flex
                  tagName='div'
                  gap='0.75rem'
                  alignItems='flex-end'
                >
                  <Icon
                    fontSize={fontSize.EXTRA_BIG}
                  />

                  <Text
                    tagName='span'
                    fontSize={fontSize.NORMAL}
                  >
                    {platform}
                  </Text>
                </Flex>
              </HyperLink>
            ))
          }
        </Flex>
      </Section>
    </Section>
  );
}

export default Contacts;
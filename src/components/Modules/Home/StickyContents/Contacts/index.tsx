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
        padding='1.5rem'
        borderRadius='5px'
        backgroundColor={color.background3}
      >
        <Flex
          tagName='ul'
          gap='1.75rem'
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
              >
                <Flex
                  tagName='div'
                  gap='0.5rem'
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
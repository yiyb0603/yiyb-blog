import { useState, useMemo, useEffect } from 'react';
import { fonts } from '@/assets/fonts';
import useStyledTheme from '@/hooks/theme/useStyledTheme';
import LeftArrowIcon from '../Icon/Arrow/LeftArrowIcon';
import RightArrowIcon from '../Icon/Arrow/RightArrowIcon';
import Flex from '../Flex';
import chunkArray from '@/utils/array/chunkArray';
import { IconBaseProps } from 'react-icons';
import Text from '../Text';
import Section from '../Section';

type PaginationProps = {
  currentPage: number;
  perPage: number;
  totalPages: number;
  hiddenOnSinglePage: boolean;
  onPageClick: (page: number) => void;
}

const Pagination = ({
  currentPage,
  perPage,
  totalPages,
  hiddenOnSinglePage,
  onPageClick,
}: PaginationProps): JSX.Element => {
  const {
    color,
    fontSize,
  } = useStyledTheme();

  const [
    pagesIndex,
    setPagesIndex,
  ] = useState<number>(0);

  const pages = Array.from({ length: totalPages }).map((_, index) => index + 1);

  const renderPages = useMemo<number[][]>(() => chunkArray({
    items: pages,
    perItems: perPage,
  }), [pages, perPage]);

  const isLastPagesIndex = ((pagesIndex + 1) * perPage) >= totalPages;

  const arrowStyle: IconBaseProps = {
    fontSize: fontSize.BIG,
    color: color.text2,
    cursor: 'pointer',
    style: {
      minWidth: fontSize.BIG,
    },
  };

  const handlePrevPage = (): void => {
    setPagesIndex((prev) => prev - 1);
  }

  const handleNextPage = (): void => {
    setPagesIndex((prev) => prev + 1);
  }

  useEffect(() => {
    const pagesIndex = Math.floor((currentPage - 1) / perPage);

    setPagesIndex(pagesIndex);
  }, [currentPage, perPage]);

  if (hiddenOnSinglePage && totalPages <= 1) {
    return <></>;
  }

  return (
    <Flex
      tagName='div'
      gap='1rem'
      alignItems='center'
      overflow='auto'
      maxWidth='100%'
      margin='0 auto'
    >
      <div>
        <LeftArrowIcon
          {...arrowStyle}
          visibility={pagesIndex === 0 ? 'hidden' : 'visibility'}
          onClick={handlePrevPage}
        />
      </div>

      <Flex
        tagName='div'
        gap='1rem'
      >
        {
          renderPages[pagesIndex]?.map((page) => {
            const selected = page === currentPage;

            return (
              <Section
                key={page}
                tagName='div'
                padding='1rem 1.5rem'
                borderRadius='5px'
                border={{
                  all: `1px solid ${selected ? color.main : color.border2}`,
                }}
                backgroundColor={selected ? color.main : color.theme}
                cursor='pointer'
                onClick={() => onPageClick(page)}
              >
                <Text
                  tagName='span'
                  fontSize={fontSize.SMALL}
                  fontFamily={fonts.pretendard.MEDIUM}
                  color={selected ? color.white : color.contrast}
                >
                  {page}
                </Text>
              </Section>
            );
          })
        }
      </Flex>

      <RightArrowIcon
        {...arrowStyle}
        visibility={isLastPagesIndex ? 'hidden' : 'visible'}
        onClick={handleNextPage}
      />
    </Flex>
  );
}

export default Pagination;
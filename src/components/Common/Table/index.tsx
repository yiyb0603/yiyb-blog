import { ReactNode } from 'react';
import styled from 'styled-components';
import Section from '../Section';

type CustomTableProps = {
  children: ReactNode;
};

const CustomTable = ({ children }: CustomTableProps): JSX.Element => {
  return (
    <CustomTableWrapper
      tagName='div'
      overflow='auto'
      margin='1.5rem 0'
    >
      <Table>{children}</Table>
    </CustomTableWrapper>
  );
};

const CustomTableWrapper = styled(Section<'div'>)`
  &::-webkit-scrollbar {
    width: 100%;
    height: 7.5px;
    background-color: ${({ theme }) => theme.color.background3};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.main};
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  white-space: nowrap;
`;

export default CustomTable;

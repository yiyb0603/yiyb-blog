import { ReactNode } from 'react';
import styled from 'styled-components';
import Section from '../Section';

type CustomTableProps = {
  children: ReactNode;
};

const CustomTable = ({ children }: CustomTableProps): JSX.Element => {
  return (
    <Section
      tagName='div'
      overflow='auto'
      margin='1.5rem 0'
    >
      <Table>{children}</Table>
    </Section>
  );
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  white-space: nowrap;
`;

export default CustomTable;

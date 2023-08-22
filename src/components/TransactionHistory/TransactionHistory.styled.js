import { styled } from 'styled-components';

export const Table = styled.table`
  background-color: ${p => p.theme.colors.grey};
  border-radius: 4px;
  overflow: hidden;
  width: 50%;
`;

export const List = styled.th`
  width: 150px;
  padding: 12px;

  text-align: left;
  background-color: ${p => p.theme.colors.verbigris};
  color: ${p => p.theme.colors.white};
`;

export const ListEl = styled.td`
  padding: 12px;
`;

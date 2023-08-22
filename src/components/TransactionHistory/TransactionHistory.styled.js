import { styled } from 'styled-components';

export const Table = styled.table`
  background-color: ${p => p.theme.colors.white};
  border-radius: 4px;
  overflow: hidden;
  width: 50%;
  border: 1px solid ${props => props.theme.colors.grey};
`;

export const List = styled.th`
  width: 150px;
  padding: 12px;

  text-align: left;
  background-color: ${p => p.theme.colors.verbigris};
  color: ${p => p.theme.colors.white};
  :hover {
    background-color: #f5f5f5;
  }
`;

export const ListEl = styled.td`
  padding: 12px;
  border: 1px solid ${props => props.theme.colors.grey};

  :nth-child(even) {
    background-color: ${p => p.theme.colors.white};
  }
`;

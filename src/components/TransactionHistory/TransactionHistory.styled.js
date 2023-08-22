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
  padding: 10px;

  text-align: left;
  background-color: ${p => p.theme.colors.verbigris};
  color: ${p => p.theme.colors.white};
`;

export const Text = styled.tr`
  :hover {
    background-color: ${p => p.theme.colors.grey};
  }
  /* :nth-child(even) {
    background-color: ${p => p.theme.colors.grey};
  } */
`;

export const ListEl = styled.td`
  padding: 10px;
  border: 1px solid ${p => p.theme.colors.grey};
`;

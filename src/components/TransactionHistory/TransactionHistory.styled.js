import { styled } from 'styled-components';

export const Table = styled.table`
  background-color: ${props => props.theme.colors.grey};
  border-radius: 4px;
  overflow: hidden;
  width: 300px;
`;

export const list = styled.th`
padding: 10px;
color: ${p => p.theme.colors.white};
`;
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  margin: auto;
`;

export const List = styled.ul`
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 7px;
  /* color: ${p => p.theme.colors.darkGrey}; */
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background-color: ${props => props.theme.colors.grey};
  border: 1px solid ${props => props.theme.colors.darkGrey};
  border-radius: 4px;
`;

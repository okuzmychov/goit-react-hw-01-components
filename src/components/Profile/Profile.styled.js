import { styled } from 'styled-components';

export const Wrapper = styled.div`
padding: 7px;
background-color: ${p => p.theme.colors.darkGrey};
border-radius: 10px;
`;

export const WrapperAvatar = styled.div`
  text-align: center;
  margin: auto;
  margin-bottom: 7px;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid ${props => props.theme.colors.grey};
  background-color: ${props => props.theme.colors.grey};
`;

export const List = styled.ul`
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 7px;
  
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
  border-radius: 8px;
`;

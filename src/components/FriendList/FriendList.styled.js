import { styled } from 'styled-components';

export const List = styled.div`
padding: 7px;
border: 1px solid ${props => props.theme.colors.grey};
background-color: ${p => p.theme.colors.white};
border-radius: 10px;
margin-bottom: 5px;
display: flex;
flex-wrap: wrap;
`;
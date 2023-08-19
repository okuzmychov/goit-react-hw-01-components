import { styled } from 'styled-components';

export const List = styled.ul`
display: flex;
width: 600px;
margin: auto;
gap: 40px;
background-color: #33FFBD;
`;

export const ListItem = styled.li`
width: 100px;
flex-wrap: wrap;
:hover {
    background-color: orange; 
}
`;
import { styled } from 'styled-components';

const getBgColor = props => {
    switch (props.id) {
        case 'id-1': return props.theme.colors.blue;
        case 'id-2': return props.theme.colors.violet;
        case 'id-3': return props.theme.colors.magenta;
        case 'id-4': return props.theme.colors.verbigris;
        default: return null;
    }
};

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 7px;
    background-color: ${props => props.theme.colors.grey};
    border-radius: 10px;
`;

export const HeaderText = styled.h3`
    text-transform: uppercase;
    padding: 15px;
    font-size: 27px;
`;

export const List = styled.ul`
    display: flex;
    text-align: center;
    justify-content: center;
    gap: 5px;
`;

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    background-color: #40B5AD;
    /* background-color: ${getBgColor}; */
    border-radius: 8px;
    color: ${props => props.theme.colors.white};
`;

export const ListEl = styled.li`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    font-size: 20px;
    background-color: ${getBgColor};
    gap: 7px;
`;
import { styled } from 'styled-components';

const getBgColor = props => {
  switch (props.label) {
    case '.docx':
      return props.theme.colors.blue;
    case '.pdf':
      return props.theme.colors.violet;
    case '.mp3':
      return props.theme.colors.magenta;
    case '.psd':
      return props.theme.colors.verbigris;
    default:
      return null;
  }
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 15px;
  background-color: ${props => props.theme.colors.grey};
  border-radius: 10px;
`;

// export const HeaderText = styled.h2`
//   text-transform: uppercase;
//   padding: 15px;
//   font-size: 27px;
// `;

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

  color: ${props => props.theme.colors.white};
`;

export const ListEl = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  font-size: 20px;
  width: 70px;
  height: 70px;
  border-radius: 8px;
  background-color: ${getBgColor};
  gap: 7px;
`;

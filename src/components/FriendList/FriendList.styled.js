import { styled } from 'styled-components';

export const List = styled.div`
padding: 7px;
border: 1px solid ${p => p.theme.colors.grey};
background-color: ${p => p.theme.colors.white};
align-items: center;
border-radius: 10px;
margin-bottom: 5px;
display: flex;
flex-wrap: wrap;
width: 300px;
font-size: 24px;
font-weight: 600;
box-shadow: 2px 2px 4px -2px ${p => p.theme.colors.verbigris};;
`;

const statusStyles =  props => {
  if (props.isOnline) { return props.theme.colors.green;
  } else { return props.theme.colors.red;
  }
};

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 10px;
  position: relative;
  background-color: ${statusStyles};
`;
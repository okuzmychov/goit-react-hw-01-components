import { List, Status } from './FriendList.styled';

export const FriendItem = ({ item: { avatar, name, isOnline, id } }) => {
  return (
    <List>
      <Status isOnline={isOnline}></Status>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </List>
  );
};

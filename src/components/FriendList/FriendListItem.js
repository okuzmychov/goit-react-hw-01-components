import { List, ListItem, WrapperAvatar } from './FriendList.styled';

export const FriendItem = ({ item: { avatar, name, isOnline, id } }) => {
    return (
        <List class="item" key={id}>
            <span class="status">{isOnline}</span>
            <img class="avatar" src={avatar} alt={name} width="48" />
            <p class="name">{name}</p>
        </List>
    );
};
import { FriendItem } from './FriendListItem'

export const FriendList = ({ friends }) => {
    return (
        <ul class="friend-list">
        {friends.map(friend => (
            <FriendItem key={friend.id} item={friend} />
        ))}
        </ul>
    );
};
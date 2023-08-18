export const FriendList = ({ user: { avatar, name, isOnline, id } }) => {
    return (
    <div>
        <ul class="friend-list">
            <li class="item">
                <span class="status">{isOnline}</span>
                <img class="avatar" src={avatar} alt={name} width="48" />
                <p class="name"></p>
            </li>
        </ul>
    </div>
    );
};
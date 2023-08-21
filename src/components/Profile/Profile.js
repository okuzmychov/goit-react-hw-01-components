import { Wrapper, List, ListItem, WrapperAvatar } from './Profile.styled';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <Wrapper className="profile">
      <WrapperAvatar className="description">
        <img src={avatar} alt={username} className="avatar" width="200" />
        <p className="name">
          <b>{username}</b>
        </p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </WrapperAvatar>

      <List className="stats">
        <ListItem>
          <span className="label">Followers</span>
          <span className="quantity">
            <b>{stats.followers}</b>
          </span>
        </ListItem>
        <ListItem>
          <span className="label">Views</span>
          <span className="quantity">
            <b>{stats.views}</b>
          </span>
        </ListItem>
        <ListItem>
          <span className="label">Likes</span>
          <span className="quantity">
            <b>{stats.likes}</b>
          </span>
        </ListItem>
      </List>
    </Wrapper>
  );
};

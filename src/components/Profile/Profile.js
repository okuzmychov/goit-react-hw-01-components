import { Wrapper, List, ListItem } from './Profile.styled';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <div className="profile">
      <Wrapper className="description">
        <img src={avatar} alt={username} className="avatar" width="300" />
        <p className="name">
          <b>{username}</b>
        </p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </Wrapper>

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
    </div>
  );
};

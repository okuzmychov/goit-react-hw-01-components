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
          <span className="label">
            <b>Followers</b>
          </span>
          <span className="quantity">{stats.followers}</span>
        </ListItem>
        <ListItem>
          <span className="label">
            <b>Views</b>
          </span>
          <span className="quantity">{stats.views}</span>
        </ListItem>
        <ListItem>
          <span className="label">
            <b>Likes</b>
          </span>
          <span className="quantity">{stats.likes}</span>
        </ListItem>
      </List>
    </div>
  );
};

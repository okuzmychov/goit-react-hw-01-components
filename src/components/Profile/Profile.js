import { List, ListItem } from './Profile.styled';

export const Profile = ({ user: { username, tag, location, avatar, stats } }) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt={username} className="avatar" width="300"/>
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <List className="stats">
        <ListItem>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </ListItem>
        <ListItem>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </ListItem>
        <ListItem>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </ListItem>
      </List>
    </div>
  );
};

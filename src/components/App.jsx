import { Profile } from './Profile';
import userProfile from '../user.json';

import { Statistics } from './Statistics';
import data from '../data.json';

import { FriendList } from './FriendList';
import friends from '../friends.json';

export const App = () => {
  return (
    <div>
      <Profile user={userProfile} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};

import { Profile } from './Profile';
import userProfile from '../user.json';
import { Statistics } from './Statistics';
import data from '../data.json';
import { FriendList } from './FriendList';
import friends from '../friends.json';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <Profile user={userProfile} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />;
    </div>
  );
};

import { Container } from "./Container/Container";

import { Profile } from './Profile/Profile';
import user from '../data/user.json';

import { Statistics } from './Statistics/Statistics';
import data from '../data/data.json';

import { FriendList } from './FriendList/FriendList';
import friends from '../data/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transaction from '../data/transaction.json';

export const App = () => {

  const {username, tag, location, avatar, stats} = user;

  return (
    <>
    <Container>
        <Profile
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          stats={stats}
        />
        <Statistics
        title="Upload stats"
        stats={data}
        />
        <FriendList
        friends={friends}
        />
        <TransactionHistory
        items={transaction}
        />
    </Container>
    </>
  );
};

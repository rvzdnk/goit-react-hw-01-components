import { Container } from "./Container/Container";

import { Profile } from './profile/Profile';
import user from '../data/user.json';


export const App = () => {

  const {username, tag, location, avatar, stats} = user;

  return (
    <>
    <Contaier>
        <Profile
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          stats={stats}
        />
    </Contaier>
    </>
  );
};

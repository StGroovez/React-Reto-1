import './App.css';
import React from 'react';
import { Navbar } from './Navbar.js';
import { UserList } from './UserList.js';
import { UserProfile } from './UserProfile';
import { MovieHeader } from './MovieHeader';
import { MovieProfile } from './MovieProfile';
import { ReactComponent as BoltSvgIcon } from './imgs/bolt.svg';
import nope from './imgs/nope.jpg';
import ghostintheshell from './imgs/ghostintheshell.png';
import elfilm from './imgs/elfilm.png';
import justfriends from './imgs/justfriends.png';
import bloodandhoney from './imgs/bloodandhoney.png';
import megan from './imgs/megan.jpg';
import avatar1000 from './imgs/avatar1000.png';
import banner from './imgs/banner.png';
import dungeons from './imgs/dungeons.jpg'
import hair from './imgs/hair.jpg'
import mario from './imgs/mario.jpg'
import guardians from './imgs/guardians.jpg'

const defaultUsers = [
  { name: 'Ivan Cruz', rate: '★★★½', date: 'May 28', moviePoster: nope, userAvatar: avatar1000 },
  { name: 'Gustavo', rate: '★★★★½', date: 'May 28', moviePoster: ghostintheshell, userAvatar: avatar1000 },
  { name: 'K♥', rate: '★★★★', date: 'May 28', moviePoster: elfilm, userAvatar: avatar1000 },
  { name: 'silvia', rate: '★', date: 'May 26', moviePoster: justfriends, userAvatar: avatar1000},
  { name: 'elvisthealien', rate: '★★', date: 'May 19', moviePoster: bloodandhoney, userAvatar: avatar1000},
  { name: 'Iván Cabrera', rate: '★', date: 'May 17', moviePoster: megan, userAvatar: avatar1000}
];

const defaultMovies = [
  { name: 'hair', moviePoster: hair },
  { name: 'elfilm', moviePoster: elfilm },
  { name: 'justfriends', moviePoster: justfriends },
  { name: 'dungeons', moviePoster: dungeons },
  { name: 'mario', moviePoster: mario },
  { name: 'guardians', moviePoster: guardians }
];


function App() {
  return (
    <div className='main-container'>
      <div className='navbar-container'>
        <Navbar />
      </div>
      <div>
        <h3 className='welcome-message'>Welcome back, <span className='user-name-message'>&ensp;Mauricio.&ensp;</span> Here's what your friends have been watching...</h3>
      </div>
      
      <MovieHeader title={'NEW FROM FRIENDS'} Icon={ BoltSvgIcon } subTitle={ 'ALL ACTIVITY' }/>
      <UserList>
        {defaultUsers.map(user => (
          <UserProfile 
            key={user.name}
            moviePoster={user.moviePoster}
            name={user.name}
            userAvatar={user.userAvatar}
            rate={user.rate}
            date={user.date}
          />
        ))}
      </UserList>
      <img className='banner' src={banner} alt='banner'/>
      <MovieHeader title={'NEW FROM FRIENDS'}  subTitle={ 'ALL ACTIVITY' }/>
      <UserList>
        {defaultMovies.map(movie =>(
          <MovieProfile
          key={movie.name}
          moviePoster={movie.moviePoster}
          />
        ))}
      </UserList>
    </div>
  );
};

export default App;

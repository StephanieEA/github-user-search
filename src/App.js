
import React, { useState, useEffect } from "react";
import {hot} from "react-hot-loader";
import "./cssReset.css";
import "./App.css";
import {Search} from './components/search';
import {User} from './components/user';
import {Toggle} from './components/toggle';
import {ActiveUser} from './components/activeUser';

function App () {
    const [users, setUsers] = useState([]);
    const [activeUser, setActiveUser] = useState();
    const [mode, setMode] = useState('light');

    const updateUsers = (users) => setUsers(users);
    const updateActiveUser = (user) => setActiveUser(user);

    const fetchUser = async (text) => {
      try {
          const response = await fetch(
              `https://api.github.com/users/${text}`,
              {
                  method: "GET",
              }
          )
          const json = await response.json();
          setActiveUser(json);
      } catch (error) {
          console.log(error);
      };
  }

    const showNextUser = async (e) => {
      e.stopPropagation();
      const currentUserIndex = users.findIndex(user => user.id === activeUser.id);
      const nextUserIndex = currentUserIndex === users.length - 1 ? 0 : currentUserIndex + 1;
      fetchUser(users[nextUserIndex].login)
    }

    const showPreviousUser = async (e) => {
      e.stopPropagation();
      const currentUserIndex = users.findIndex(user => user.id === activeUser.id);
      const previousUserIndex = currentUserIndex === 0 ? users.length -1 : currentUserIndex - 1;
      fetchUser(users[previousUserIndex].login)
    }

    const toggleMode = () => {
      if (mode === 'light') {
        window.localStorage.setItem('mode', 'dark');
        setMode('dark');
      } else {
        window.localStorage.setItem('mode', 'light');
        setMode('light');
      }
    };

    useEffect(() => {
      const localmode = window.localStorage.getItem('mode');
      localmode && setMode(localmode);
    }, []);

    return(
      <div className={`root ${mode === 'light' ? 'root--light' : 'root--dark'}`}>
        <header>
        <Toggle mode={mode} toggleMode={toggleMode} />
        <h1> Github User Search </h1>
        <Search setUsers={updateUsers} />
        </header>
        <ul className='main-section'>
          {users.map(user => <User user={user} key={user.id} fetchUser={fetchUser}/>)}
        </ul>
        <ActiveUser user={activeUser} updateActiveUser={updateActiveUser} showNextUser={showNextUser} showPreviousUser={showPreviousUser} mode={mode}/>
      </div>
    );
}

export default hot(module)(App);
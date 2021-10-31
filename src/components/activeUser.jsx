import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { func, string, object } from "prop-types";
import React from "react";
import Moment from 'react-moment';

export const ActiveUser = ({user, updateActiveUser, showNextUser, showPreviousUser, mode}) => {
    const clearUser = () => updateActiveUser();
    if (user) {
      return (
          <div className="lightbox" onClick={clearUser}>
              <button className={`btn ${mode === 'light' ? 'btn--light' : 'btn--dark'}`} onClick={showPreviousUser}>
                  <FontAwesomeIcon icon={faAngleLeft}/>
              </button>
              <section className="card lightbox-card">
                  <button className={`btn btn--clear ${mode === 'light' ? 'btn--light' : 'btn--dark'}`} onClick={clearUser}>x</button>
                  <img alt={`${user.login} avatar`} src={`${user.avatar_url}`}></img>
                  <ul>
                      <li>{user.login}</li>
                      <hr/>
                      <li>{user.name}</li>
                      {user.email && <li>{user.email}</li>}
                      <li>
                          Joined&nbsp;
                          <Moment format="YYYY/MM/DD">
                              {user.created_at}
                          </Moment>
                      </li>
                      <li>{user.public_repos} repos</li>
                      <li>{user.followers} followers</li>
                      <li>{user.following} following</li>
                      {user.location && <li>{user.location}</li>}
                      <li>
                          <a href={`${user.html_url}`}>
                              {user.html_url}
                          </a>
                      </li>
                      {user.blog &&
                          <li>
                              <a href={`${user.blog}`}>
                                  {user.blog}
                              </a>
                          </li>
                      }
                      {user.twitter_username &&
                          <li>
                              <a href={`http://twitter.com/${user.twitter_username}`}>
                                  {user.twitter_username}
                              </a>
                          </li>}
                  </ul>
              </section>
              <button className={`btn ${mode === 'light' ? 'btn--light' : 'btn--dark'}`} onClick={showNextUser}>
                  <FontAwesomeIcon icon={faAngleRight} />
              </button>
          </div>
      )
  }
  return null;
}        

ActiveUser.propTypes = {
    user: object, 
    updateActiveUser: func.isRequired,
    showNextUser: func.isRequired, 
    showPreviousUser: func.isRequired, 
    mode: string.isRequired
}
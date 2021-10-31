import React from "react";
import { func, object } from 'prop-types';

export const User = ({user, fetchUser}) => {

    const handleOnClick = async (e) => {
        fetchUser(e.currentTarget.innerText)
    }

    const handleKeyDown = async (e) => {
        if (e.code === 'Enter') {
            fetchUser(e.currentTarget.innerText);
        }
    }

    return (
        <li onClick={handleOnClick} onKeyDown={handleKeyDown} className='card' tabIndex={0}>
            <h3>{user.login}</h3>
            <img alt={`${user.login} avatar`} class="Avatar_1pcpsid u-imgResponsive" src={`${user.avatar_url}`} width="120"></img>
        </li>
    );
}

User.propTypes = {
    fetchUser: func.isRequired,
    user: object.isRequired
}
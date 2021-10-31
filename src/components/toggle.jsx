import React from 'react'
import { func, string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';


export const Toggle = ({mode, toggleMode }) => {
    const isLight = mode === 'light';
    return (
        <button className={`btn btn--right ${isLight ? "btn--light" : "btn--dark"}`} onClick={toggleMode} >
            <FontAwesomeIcon icon={isLight ? faMoon : faSun} style={{ marginRight: '5px' }}/>
            {isLight ? 'Dark Mode' : 'Light Mode'}
        </button>
    );
};

Toggle.propTypes = {
    mode: string.isRequired,
    toggleMode: func.isRequired,
}


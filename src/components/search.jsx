import React, { useState } from "react";
import { func } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const Search = ({setUsers}) => {
    const [search, setSearch] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (e.type === 'submit') {
            if (search) {
                try {
                    const response = await fetch(
                        `https://api.github.com/search/users?q=${search}`,
                        {
                            method: "GET",
                        }
                    )
                    const json = await response.json();
                    setUsers(json.items);
                } catch (error) {
                    console.log(error);
                };
            } else {
                setUsers([]);
            }
        }
    }

    const handleOnChange = e => setSearch(e.target.value);
    const clearSearch = () => setSearch('');

    return (
        <form onSubmit={handleSubmit} className='form--search'>
            <input
                type="text"
                value={search}
                onChange={handleOnChange}
                aria-label="Search"
            />
            <input type="submit" value="Search"/>
            {search && <button className='btn--clear' onClick={clearSearch}>x</button>}
            <FontAwesomeIcon icon={faSearch} />
        </form>
    );
}

Search.propTypes = {
    setUsers: func.isRequired,
}
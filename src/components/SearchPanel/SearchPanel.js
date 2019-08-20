import React from 'react';
import './style.css';

const SearchPanel = ({term, onSearch}) => {
    const placeholder = 'Type here to search';

    return (
        <input type="text"
               value={term}
               onChange={onSearch}
               placeholder={placeholder}
               className="search-input form-control"
               autoComplete="off"
        />
    );
};

export default SearchPanel;
import React from 'react';

const SearchBox = ({ onSearch }) => {

    return (
        <div>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type='text'
                placeholder='Search here'
                onChange={onSearch}

            />
        </div>

    );
}
export default SearchBox;
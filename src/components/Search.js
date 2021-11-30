import React from 'react';

const SearchBar = () => {
    const handleKeyUp = (e) => {
        if(e.key === 'Enter') {
            console.log('enter press completed');
        }
    }

    return (
        <div className="search-bar">
            <p>Image Search:</p>
            <input 
                type="text" 
                onKeyUp={handleKeyUp}
            />
        </div>
    );
}

export default SearchBar;
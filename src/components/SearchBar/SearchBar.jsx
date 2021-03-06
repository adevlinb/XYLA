import './SearchBar.css'
import { useState } from 'react';


export default function SearchBar({ searchForBooks }) {
    const [query, setQuery] = useState('');

    function handleQuery(evt){
        evt.preventDefault()
        if (query === '' || query === null || query === undefined) return;
        searchForBooks(query)
        setQuery('')
    }


    return (
        <div className="searchBar">
            <form onSubmit={handleQuery} className='searchBar'>
                <input
                    value={query}
                    onChange={(evt) => setQuery(evt.target.value)}
                    placeholder='Search For Books!'
                />
                <button type="submit"><i class="material-icons" id="personIconProfile">search</i></button>
            </form>
        </div>
    );
}
import { useState } from 'react';


export default function SearchBar({ searchForBooks }) {
    const [query, setQuery] = useState('');

    function handleQuery(evt){
        evt.preventDefault()
        searchForBooks(query)
        setQuery('')
    }


    return (
        <>
            <form onSubmit={handleQuery}>
                <input
                    value={query}
                    onChange={(evt) => setQuery(evt.target.value)}
                    placeholder='Search For Books!'
                />
                <button type="submit">Search for Books!</button>
            </form>
        </>
    );
}
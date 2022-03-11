import { useState, useEffect } from 'react'
import DisplayLibraryItem from '../DisplayLibraryItem/DisplayLibraryItem';

export default function DisplayProfileDetail({profile, userLibrary}) {
   

    const book = userLibrary.map((b, idx) => (
        <DisplayLibraryItem b={b} key={b._id} />
    ));


    return (
        <>
        
            <h1>{profile.name}'s Books</h1>
            <div className="grid">
                {book}
            </div>
        </>


    )
    
}
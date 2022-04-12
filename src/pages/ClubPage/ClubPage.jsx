import './ClubPage.css'
import { useState } from 'react';
import DisplayMyClubs from '../../components/DisplayMyClubs/DisplayMyClubs';
import DisplayStartAClub from '../../components/DisplayStartAClub/DisplayStartAClub';
import DisplayFindAClub from '../../components/DisplayFindAClub/DisplayFindAClub';
import * as clubsAPI from '../../utilities/clubs-api';

export default function ClubPage() {

    const [show, setShow] = useState({
        myClubs: true,
        startAClub: false,
        findClubs: false,
    })

    function toggleShow(shelf) {
        const newShowState = { ...show };
        for (let key in newShowState) {
            newShowState[key] = false;
        }
        newShowState[shelf] = true;
        setShow(newShowState);
    }

    async function startNewClub(data) {
        const newClub = clubsAPI.startNewClub(data);
        console.log(newClub);
    }

    return (
        <div className="horizontal">
            <div className="verticalOne">
                <div id="clubStats">
                    <h3>Tree House <i className="material-icons" id="landingIcons1">groups</i></h3>
                </div>
                <button className="sideButtons" onClick={() => toggleShow('myClubs')}>My Clubs</button>
                <button className="sideButtons" onClick={() => toggleShow('startAClub')}>Start a club</button>
                <button className="sideButtons" onClick={() => toggleShow('findClubs')}>Find Clubs</button>
            </div>
            <div className="verticalTwo">
                <h1>BOOK CLUBS COMING SOON</h1>
                {show.myClubs && <DisplayMyClubs />}
                {show.startAClub && <DisplayStartAClub startNewClub={startNewClub}/>}
                {show.findClubs && <DisplayFindAClub />}
            </div>
            <div className="verticalThree">
                <div className="quickLinks">
                    <h3>QUICK LINKS</h3>
                    <i className="material-icons" id="link">link</i>
                    <h5><a href="https://www.google.com/search?q=local+bookstore" rel="noreferrer" target="_blank">Find Local Bookstores</a></h5>
                    <h5><a href="https://www.goodreads.com/" rel="noreferrer" target="_blank">Goodreads</a></h5>
                    <h5><a href="https://books.google.com/" rel="noreferrer" target="_blank">Google Books</a></h5>
                    <h5><a href="https://www.nytimes.com/books/best-sellers/" rel="noreferrer" target="_blank">NYT Best Sellers</a></h5>
                    <h5><a href="https://apps.npr.org/best-books/#view=covers&year=2021" rel="noreferrer" target="_blank">NPR Favorites</a></h5>
                </div>
            </div>
            <footer>ALL RIGHTS RESERVED</footer>
        </div>
    );
}

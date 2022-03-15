import './ClubPage.css'

export default function ClubPage() {

    return (
        <div className="horizontal">
            <div className="verticalOne">
                <h3>Tree House <i className="material-icons" id="landingIcons1">groups</i></h3>
                <h5>My Clubs</h5>
                <h5>Find Clubs</h5>
            </div>
            <div className="verticalTwo">
                <h1>BOOK CLUBS COMING SOON</h1>
            </div>
            <div className="verticalThree">
                <h3>QUICK LINKS</h3>
                <h5><a href="https://www.google.com/search?q=local+bookstore" rel="noreferrer" target="_blank">Find Local Bookstores</a></h5>
                <h5><a href="https://www.goodreads.com/" rel="noreferrer" target="_blank">Goodreads</a></h5>
                <h5><a href="https://books.google.com/" rel="noreferrer" target="_blank">Google Books</a></h5>
                <h5><a href="https://www.nytimes.com/books/best-sellers/" rel="noreferrer" target="_blank">NYT Best Sellers</a></h5>
                <h5><a href="https://apps.npr.org/best-books/#view=covers&year=2021" rel="noreferrer" target="_blank">NPR Favorites</a></h5>
            </div>
            <footer>ALL RIGHTS RESERVED</footer>
        </div>
    );
}

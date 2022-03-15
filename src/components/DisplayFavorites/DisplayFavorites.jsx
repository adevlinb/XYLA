import './DisplayFavorites.css'

export default function DisplayFavorites({ user }) {

    return (

        <>
            <h3>{user.name}'s' Favorites</h3>
            <img className="bookshelfPic" src="/images/Bookshelf_Pano.png" alt="BooksLandingPhoto" />
            <h3>COMING SOON!</h3>
        </>
    )

}
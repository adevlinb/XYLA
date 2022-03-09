import DisplayLibraryItem from '../DisplayLibraryItem/DisplayLibraryItem'
import "./DisplayLibrary.css"

export default function DisplayLibrary({ library }) {
    const book = library.map((b, idx) => (
        <DisplayLibraryItem b={b} key={b._id}/>
    ));

    return (
        <>
        <div className='sortLinks'>LINKS TO SORT WITH
            <button>Books ive read  </button>
            <button>Whole Shelf </button>
            <button>Books </button>
            <button>Another Sort  </button>
            <button>Sort Again</button>
            <button>Something Else </button>
        </div>
        <div className="grid">
            {book}
        </div>
        </>
    );
}
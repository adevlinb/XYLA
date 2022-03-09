// import * as userService from '../../utilities/users-service';
import SearchBar from '../../components/SearchBar/SearchBar'
import DisplayResults from '../../components/DisplayResults/DisplayResults';

export default function SearchBooksPage({ queryResults, setQueryResults, searchForBooks, addBook }) {



  return (
      <div className="horizontal">
        <div className="verticalOne">
          <h5>QUICK SEARCHES</h5>
          <h5>Shortcut Link</h5>
          <h5>Shortcut Link</h5>
          <h5>Shortcut Link</h5>
          <h5>Shortcut Link</h5>
          <h5>Shortcut Link</h5>
        </div>
        <div className="verticalTwo">
          <h1>Search for new books!</h1>
          <SearchBar searchForBooks={searchForBooks} />
          <DisplayResults queryResults={queryResults} addBook={addBook} />
      </div>
    </div>
  
  );
}

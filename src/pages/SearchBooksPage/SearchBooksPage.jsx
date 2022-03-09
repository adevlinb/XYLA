// import * as userService from '../../utilities/users-service';
import SearchBar from '../../components/SearchBar/SearchBar'
import DisplayResults from '../../components/DisplayResults/DisplayResults';

export default function SearchBooksPage({ queryResults, setQueryResults, searchForBooks, addBook }) {



  return (
    <>
      <h1>SearchBooksPage</h1>
      <SearchBar searchForBooks={searchForBooks} />
      <DisplayResults queryResults={queryResults} addBook={addBook} />
    </>
  );
}
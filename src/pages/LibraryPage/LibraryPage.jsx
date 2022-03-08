import './LibraryPage.css'
import DisplayLibrary from '../../components/DisplayLibrary/DisplayLibrary'

export default function LibraryPage({library}) {

  return (
    <>
    <h1>My Bookshelf</h1>
      
      <DisplayLibrary library={library} />
    </>
  );
}
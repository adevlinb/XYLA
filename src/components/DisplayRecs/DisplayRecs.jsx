import './DisplayRecs.css'
import DisplayRecItems from '../DisplayRecItems/DisplayRecItems'

export default function DisplayRecs({ myRecs }) {
    const rec = myRecs.map((r) => (
        <DisplayRecItems r={r} key={r._id} />
    ));

    // console.log(r)
    return (
        <>
            <h1>My Recommendations from Friends</h1>
            <div className="grid">
                {rec}
            </div>


        </>
    );
}
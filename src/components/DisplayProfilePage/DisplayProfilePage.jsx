import './DisplayProfilePage.css'

export default function DisplayProfilePage({p, toggleShow}) {

   
    return (
        <div id="profileButton">
            <button onClick={() => toggleShow('profileDetail', p._id)}>
                <i className="material-icons" id="landingIcons1">account_circle</i>
                <h5 id="buttonName">{p.name}</h5>
            </button>
        </div>
 
    )
}
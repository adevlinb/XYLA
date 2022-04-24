import './DisplayProfilePage.css'

export default function DisplayProfilePage({p, toggleShow, user}) {
    let friendRequestButton = false;
    console.log(user, "displayprofilepage")
    if(p.requests.includes(user._id)) friendRequestButton = true;
   
    return (
    
  
          
        <div id="profileButton">
            <button onClick={() => toggleShow('profileDetail', p._id)}>
                <i className="material-icons" id="landingIcons1">account_circle</i>
                <h5 id="buttonName">{p.name}</h5>
            </button>
            {friendRequestButton ? <button>Accept Request</button> : ""}

        </div>
 


    )
}
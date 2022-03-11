

export default function DisplayProfilePage({p, toggleShow}) {
    return (
    
       <>
            <button onClick={() => toggleShow('profileDetail', p._id)}>{p.name}</button>

       </> 

    )
}
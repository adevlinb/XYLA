

export default function DisplayProfilePage({p, toggleShow}) {
    console.log(p._id, p.name, 'display profile page')
    return (
    
       <>
            <button onClick={() => toggleShow('profileDetail', p._id)}>{p.name}</button>
       </> 

    )
}
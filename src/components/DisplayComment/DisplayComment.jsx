import './DisplayComment.css'

export default function DisplayComment({c}) {
    const date = new Date(c.createdAt)

    return (
       <div className="container2">
            <div className="floatLeft">
                <div className="personIcon">
                    <i class="material-icons" id="personIcon">account_circle</i>
                </div>
                {c.user.name}
            </div>
            <div className="comment">
                {c.content}
            </div>
            <div className="commentDate">
                {date.toString().substring(0, 21)}  
            </div>
        </div>
      
    )
}
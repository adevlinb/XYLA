import './DisplayComment.css'

export default function DisplayComment({c}) {
    const date = new Date(c.createdAt)

    return (
        <div className="commentContainer">
            <div className="floatLeft">
                <div className="personIcon">
                    <i class="material-icons" id="personIcon">account_circle</i>
                    {c.user.name}
                </div>
            </div>
            <div className="comment">
                {c.content}
                {date.toString().substring(0, 21)}  
            </div>
        
        </div>
      
    )
}
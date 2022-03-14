

export default function DisplayComment({c}) {
    const date = new Date(c.createdAt)

    return (
        <div className="comment">
            {c.user.name}
            {c.content}
            {date.toString()}    
        </div>
    )
}
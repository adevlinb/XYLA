

export default function DisplayComment({comment}) {
    console.log(comment.content)
    return (
        <>
            {comment.content}
        </>
    )
}
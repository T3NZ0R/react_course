
import './Comment.css';

function Comment({comment:{name,email, body}}){

    return(
        <div className={'comment'}>
            <h4>{name}</h4>
            <h4>{email}</h4>
            <p>{body}</p>
        </div>
    )
}

export default Comment;
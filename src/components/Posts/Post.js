
import './Post.css';

function Post({post:{title, body}}){

    return(
        <div className={'post'}>
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    )
}

export default Post;
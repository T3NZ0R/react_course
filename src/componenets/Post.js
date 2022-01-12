import './Post.css';

function Post(props){

    let{title, body}=props;

    return(
        <div className={'post'}>
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    )
}

export default Post;
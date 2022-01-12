import './User.css';

function User (props){
    let { id, name, username, email} = props;
    return(
        <div className={'user'}>
            <h3>{id}</h3>
            <h3>{name}</h3>
            <h3>{username}</h3>
            <h3>{email}</h3>
        </div>
    );
}

export default User;
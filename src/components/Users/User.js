import './User.css';

function User ({user:{ id, name, username, email}}){
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
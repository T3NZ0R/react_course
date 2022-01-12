
import './Rocket.css';

function Rocket(props){

    let {name, year, photo} = props;

    return(
        <div className={'rocket'}>

            <div className={'info'}>
                <h2>{name}</h2>
                <h3>{year}</h3>
            </div>

            <div className={'photo'}>
                <img src={photo} alt=""/>
            </div>

        </div>
    );


}

export default Rocket;
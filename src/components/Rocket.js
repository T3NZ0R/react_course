import {useEffect, useState} from "react";

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
function Rockets(){

    let [rocketList, setRocketList] = useState([]);


    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(rockets => {
                setRocketList(rockets.filter(item => item.launch_year !== '2020'))
            })

    }, []);


    return(
        rocketList.map(item => <Rocket
                key = {item.flight_number}
                name = {item.mission_name}
                year = {item.launch_year}
                photo = {item.links.mission_patch_small}/>)
    );


}

export default Rockets;
import {useEffect, useState} from "react";

import Rocket from './Rocket';

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
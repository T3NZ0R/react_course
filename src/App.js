
import './App.css';
import {useEffect, useState} from "react";
 import Rocket from "./components/Rocket";


export default function App() {

    let [rocketList, setRocketList] = useState([]);


    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(rockets => {
                setRocketList(rockets.filter(item => item.launch_year !== '2020'))
            })

    }, []);

    return (
        <div className={'wrap'}>
            {rocketList.map(item => <Rocket
                key = {item.flight_number}
                name = {item.mission_name}
                year = {item.launch_year}
                photo = {item.links.mission_patch_small}/>)}
        </div>
    )
}



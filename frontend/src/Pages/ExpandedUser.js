import UserProfile from '../Components/UserProfile.js';
import { useState, useEffect, } from 'react';
import { useParams } from 'react-router-dom';
import Group from './Group';
import { months, calcButtonTextColor } from '../Tools';
import axios from 'axios';

export default function EditableUserProfile(){
    const URL = process.env.REACT_APP_API_URL
    const [info, getUser] = useState([]);
    let {id} = useParams();
    useEffect(() => { axios.get(`${URL}/users/${id}`)
    .then((res) => getUser(res.data.payload))
    .catch((err) => console.log(err.message.payload)); }, [URL,id]);


    console.log()

    return <div>
        <Group>
            <h2>Name:</h2> {info.name}
        </Group>
        <Group>
            <h2>Email:</h2> {info.email}
        </Group>
        <Group>
            <h2>Age:</h2> {info.age}
        </Group>
        <Group>
            <h2>Gender:</h2> {info.gender}
        </Group>
        <Group>
            <h2>Preffered Foods:</h2>
            </Group>
        <Group>
            <button
                // onClick={startEditCallback}
            >Edit</button>
        </Group>
    </div>
}
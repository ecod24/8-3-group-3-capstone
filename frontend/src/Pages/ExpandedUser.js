import UserProfile from '../Components/UserProfile.js';
import { useState } from 'react';
import Group from './Group';
// import ColorBox from './Colorbox';
import { months, calcButtonTextColor } from '../Tools';

export default function EditableUserProfile({
    info,
    startEditCallback
}) {

    console.log()

    // const buttonStyle = {
    //     backgroundColor: info.color,
    //     color: calcButtonTextColor(info.color)
    // };

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
        {/* <Group>
            <h2>Favourite Color:</h2> <ColorBox color={info.color}/>
        </Group> */}
        <Group>
            <h2>Preffered Foods:</h2>
            </Group>
        <Group>
            <button
                // style={buttonStyle}
                onClick={startEditCallback}
            >Edit</button>
        </Group>
    </div>
}
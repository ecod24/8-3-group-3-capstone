import UserProfile from '../Components/UserProfile.js';
import { useState } from 'react';
import Group from './Group';
import ColorBox from './ColorBox';
import { months, calcButtonTextColor } from '../Tools';

export default function EditableUserProfile({
    stored,
    startEditCallback
}) {

    console.log()

    const buttonStyle = {
        backgroundColor: stored.color,
        color: calcButtonTextColor(stored.color)
    };

    return <div>
        <Group>
            <h2>Name:</h2> {stored.name}
        </Group>
        <Group>
            <h2>Birthday:</h2> {months.getShortName(stored.month)} {stored.day}
        </Group>
        <Group>
            <h2>Favourite Color:</h2> <ColorBox color={stored.color}/>
        </Group>
        <Group><h2>Preffered Foods:</h2></Group>
        <Group>
            <button
                style={buttonStyle}
                onClick={startEditCallback}
            >Edit</button>
        </Group>
    </div>
}
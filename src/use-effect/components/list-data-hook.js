import React, { useEffect, useState } from 'react';
import {myApi} from '../my-api';

function getRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const ListDataHook = () => {
    
    const [data,setData] = useState([]);
    const [userId,setUserId] = useState(1);    

    const handleUserId = () => {
        const randomId = getRandomInt(1,5);
        setUserId(randomId);
        //this.setState({userId: randomId});
    };
    
    // state = {
    //     data: [],
    // };

    useEffect(()=> {
        async function fetchData() {
            const data = await myApi.fakeFetch(userId);
            setData(data);
        }
        fetchData();
    },[userId]);

    // async componentDidMount() {
    //     const data = await myApi.fakeFetch();
    //     this.setState({data});
    // }
    
    return (
        <>
            <h3>User ID: {userId}</h3>
            {data.map(({label}) => (
                <p key={label}>{label}</p>
            ))}
            <button onClick={handleUserId}>Update user id</button>
        </>
    );
    
    //data.map(({label}) => <p key={label}>{label}</p>);      
    
};

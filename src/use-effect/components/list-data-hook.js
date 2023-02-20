import React, { useEffect, useState } from 'react';

import {myApi} from '../my-api';

export const ListDataHook = () => {
    
    const [data,setData] = useState([]);
    
    // state = {
    //     data: [],
    // };

    useEffect(()=> {
        async function fetchData() {
            const data = await myApi.fakeFetch();
            setData(data);
        }
        fetchData();
    },[]);

    // async componentDidMount() {
    //     const data = await myApi.fakeFetch();
    //     this.setState({data});
    // }
    
    return data.map(({label}) => <p key={label}>{label}</p>);      
    
};

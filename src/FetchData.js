import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FetchData.css'; 

const FetchData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://randomuser.me/api/?results=20')
            .then(res => {
                setData(res.data.results);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='container'>
            <div className=' table-container'>
                <table className='custom-table'>
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>State</th>
                            <th>Country</th>
                            <th>Postcode</th>
                            <th>Number</th>
                            <th>Name</th>
                            <th>Latitude</th>
                            <th>Longitude</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user, index) => (
                            <tr key={index}>
                                <td>{user.location.city}</td>
                                <td>{user.location.state}</td>
                                <td>{user.location.country}</td>
                                <td>{user.location.postcode}</td>
                                <td>{user.location.street.number}</td>
                                <td>{user.name.first} {user.name.last}</td>
                                <td>{user.location.coordinates.latitude}</td>
                                <td>{user.location.coordinates.longitude}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FetchData;

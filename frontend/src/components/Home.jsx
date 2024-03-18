import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
    const url = "http://localhost:8000/api/expenses";
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); 
    }, []); 

    return (
        <div>
        
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        {item.description} - ${item.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function useGetData(url) {
    const [data, setData] = useState([]);
    const [loadingget, setloadingget] = useState(true);
    const [errorget, seterrorget] = useState(false);

    useEffect(() => {
        const fetchData = async() => {
            setloadingget(true);
            try {
                const response = await axios.get(url);
                setData(response.data);
                setloadingget(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                seterrorget(true);
            }
        };

        fetchData();
    }, [url]);

    return { data, loadingget, errorget }
}

export default useGetData;
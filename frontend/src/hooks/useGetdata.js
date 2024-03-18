import React, { useEffect, useState } from 'react'
import axios from 'axios'

function useGetdata(url) {
    const [data, setdata] = useState([]);
    useEffect(() => {
        const fetchData = async() => {
            const response = await axios.get(url)
                .then((response) => { setdata(response) })
        }
    }, [url])
}

export default useGetdata
import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    async function getData() {
        const fetchedData = await fetch(url);
        const json = await fetchedData.json();
        setData(json);
    }
    useEffect(() => {
        getData();
    }, [url]);
    return data;
}

export default useFetch;

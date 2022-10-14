import { useState, useEffect } from "react";

export default function useDataFetching(defaultUrl) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(defaultUrl);

    useEffect(() => {
        const fetchData = async () => {
            setData(null);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(
                        `HTTP error: The status is ${response.status}`
                    );
                }
                let data = await response.json();
                setData(data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null)
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return [data, loading, error, setUrl];
}
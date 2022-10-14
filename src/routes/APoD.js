import { useState, useEffect, useCallback } from "react";
import APoDComponent from "../components/apod/APoDComponent";
import DatePicker from "../components/shared/DatePicker"
import useDataFetching from "../utils/useDataFetching";

const APoD = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    const [date, setDate] = useState((new Date()).toISOString().substring(0, 10));
    const getFullUrl = useCallback(() => {
        return apiUrl + `&date=${date}`;
    }, [apiUrl, date]);

    const [data, loading, error, setUrl] = useDataFetching(getFullUrl());

    useEffect(() => {
        setUrl(getFullUrl());
    }, [setUrl, getFullUrl])

    return (
        <div>
            <h1>Astronomy Picture of the Day</h1>
            <DatePicker date={date} onChange={(date) => {
                setDate(date);
            }}
            />
            {loading && <div>Loading...</div>}
            {error && (
                <div>There was an error while fetching data: {error}</div>
            )}
            {data && (
                <APoDComponent data={data} />
            )}
        </div>
    );
}

export default APoD;

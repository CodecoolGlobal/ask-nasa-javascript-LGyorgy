import { useState, useEffect, useCallback } from "react";
import { useDataFetching, DatePicker } from "./Utils"
export default APoDApp;

function APoDApp() {
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
                <APoD data={data} />
            )}
        </div>
    );
}


function APoD(props) {
    const dateLocales = "en-US"
    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    if (props.data === null) {
        return <div className="apod">Loading...</div>
    }

    let mediaContent = <p>No media</p>;

    if (props.data.media_type === "video") {
        mediaContent = <iframe className="apod-video" width="420" height="315" title={props.data.title} src={props.data.url}></iframe>;
    } else {
        mediaContent = <img className="apod-image" alt={props.data.title} src={props.data.url} />
    }

    return (
        <div className="apod">
            <p className="apod-date">{new Date(props.data.date).toLocaleDateString(dateLocales, dateOptions)}</p>
            <div className="apod-media-content">{mediaContent}</div>
            <p className="apod-title">
                <strong>{props.data.title}</strong>
            </p>
            <p className="apod-explanation">
                <strong>Explanation:</strong> {props.data.explanation}
            </p>
        </div>
    );
}

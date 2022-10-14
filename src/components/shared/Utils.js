import { useState, useEffect } from "react";
import "../../css/Modal.css";

export function useDataFetching(defaultUrl) {
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


export function Modal(props) {
    if (!props.show) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">{props.title}</h4>
                </div>
                <div className="modal-body">
                    {props.body}
                </div>
                <div className="modal-footer">
                    <button className="button" onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}


export function DatePicker(props) {
    const handleChange = (e) => {
        props.onChange(e.target.value);
    }

    return (
        <form>
            <input onChange={handleChange} type="date" name="date" value={props.date} />
        </form>
    );
}
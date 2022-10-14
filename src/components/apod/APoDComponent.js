const APoDComponent = (props) => {
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

export default APoDComponent;
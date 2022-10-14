const APoDComponent = ({ data }) => {
    const dateLocales = "en-US"
    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    if (data === null) {
        return <div className="apod">Loading...</div>
    }

    let mediaContent = <p>No media</p>;

    if (data.media_type === "video") {
        mediaContent = <iframe className="apod-video" width="420" height="315" title={data.title} src={data.url}></iframe>;
    } else {
        mediaContent = <img className="apod-image" alt={data.title} src={data.url} />
    }

    return (
        <div className="apod">
            <p className="apod-date">{new Date(data.date).toLocaleDateString(dateLocales, dateOptions)}</p>
            <div className="apod-media-content">{mediaContent}</div>
            <p className="apod-title">
                <strong>{data.title}</strong>
            </p>
            <p className="apod-explanation">
                <strong>Explanation:</strong> {data.explanation}
            </p>
        </div>
    );
}

export default APoDComponent;
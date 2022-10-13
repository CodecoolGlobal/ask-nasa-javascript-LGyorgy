import { useState } from "react";
import { useDataFetching, Modal } from "./Utils";
import "./GalleryApp.css";
export default GalleryApp;

function GalleryApp() {
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&thumbs=True`;

    const todayDate = new Date()
    const todayStr = todayDate.toISOString().substring(0, 10);
    const fourWeeksAgoDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate() - (7 * 4));
    const fourWeeksAgoStr = fourWeeksAgoDate.toISOString().substring(0, 10);

    const [data, loading, error, setUrl] = useDataFetching(apiUrl + `&end_date=${todayStr}&start_date=${fourWeeksAgoStr}`);

    return (
        <div className="gallery-app">
            <h1>Gallery</h1>
            {loading && <div>Loading...</div>}
            {error && (
                <div>There was an error while fetching data: {error}</div>
            )}
            {data && (
                <Gallery data={[...data].reverse()} />
            )}
        </div>
    );
}


function Gallery(props) {
    return (
        <div className="gallery">{props.data.map((item) => {
            return <GalleryItemCard key={item.date} {...item} />
        })}
        </div>
    );
}


function GalleryItemCard(props) {
    const [showModal, setShowModal] = useState(false);

    const imageUrl = props.media_type === "video"
        ? props.thumbnail_url
        : props.url;

    return <div className="gallery-item-card" onClick={() => { if (!showModal) setShowModal(true) }}>
        <img className="gallery-image" width="auto" height="100px" src={imageUrl} alt={props.title} />
        <p className="gallery-image-title">{props.title}</p>
        {showModal && (
            <GalleryItemModal item={props} onClose={() => setShowModal(false)} show={showModal} />
        )}
    </div>;
}


function GalleryItemModal(props) {
    const dateLocales = "en-US"
    const dateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    const imageUrl = props.item.media_type === "video"
        ? props.item.thumbnail_url
        : props.item.url;

    const modalBody = (
        <div>
            <div className="gallery-modal-image">
                <img className="gallery-image" width="auto" height="200px" src={imageUrl} alt={props.title} />
            </div>
            <p><strong>Date:</strong> {new Date(props.item.date).toLocaleDateString(dateLocales, dateOptions)}</p>
            <p><strong>Explanation:</strong> {props.item.explanation}</p>
        </div>
    );

    return (
        <Modal title={props.item.title} body={modalBody} show={props.show} onClose={props.onClose} />
    );
}
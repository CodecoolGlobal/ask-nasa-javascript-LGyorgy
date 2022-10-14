import { Modal } from "../shared/Utils";

const GalleryItemModal = (props) => {
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

export default GalleryItemModal;
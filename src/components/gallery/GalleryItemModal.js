import { Modal } from "../shared/Utils";

const GalleryItemModal = ({ item, show, onClose }) => {
    const dateLocales = "en-US"
    const dateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    const imageUrl = item.media_type === "video"
        ? item.thumbnail_url
        : item.url;

    const modalBody = (
        <div>
            <div className="gallery-modal-image">
                <img className="gallery-image" width="auto" height="200px" src={imageUrl} alt={item.title} />
            </div>
            <p><strong>Date:</strong> {new Date(item.date).toLocaleDateString(dateLocales, dateOptions)}</p>
            <p><strong>Explanation:</strong> {item.explanation}</p>
        </div>
    );

    return (
        <Modal title={item.title} body={modalBody} show={show} onClose={onClose} />
    );
}

export default GalleryItemModal;
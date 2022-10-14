import { useState } from "react";
import GalleryItemModal from "./GalleryItemModal";

const GalleryItemCard = (props) => {
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

export default GalleryItemCard;
import { useState } from "react";
import GalleryItemModal from "./GalleryItemModal";

const GalleryItemCard = ({ item }) => {
    const [showModal, setShowModal] = useState(false);

    const imageUrl = item.media_type === "video"
        ? item.thumbnail_url
        : item.url;

    return <div className="gallery-item-card" onClick={() => { if (!showModal) setShowModal(true) }}>
        <img className="gallery-image" width="auto" height="100px" src={imageUrl} alt={item.title} />
        <p className="gallery-image-title">{item.title}</p>
        {showModal && (
            <GalleryItemModal item={item} onClose={() => setShowModal(false)} show={showModal} />
        )}
    </div>;
}

export default GalleryItemCard;
import GalleryItemCard from "./GalleryItemCard";

const GalleryComponent = ({ data }) => {
    return (
        <div className="gallery">{data.map((item) => {
            return <GalleryItemCard key={item.date} item={item} />
        })}
        </div>
    );
}

export default GalleryComponent;
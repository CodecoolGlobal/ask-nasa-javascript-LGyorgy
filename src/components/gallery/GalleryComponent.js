import GalleryItemCard from "./GalleryItemCard";

const GalleryComponent = (props) => {
    return (
        <div className="gallery">{props.data.map((item) => {
            return <GalleryItemCard key={item.date} {...item} />
        })}
        </div>
    );
}

export default GalleryComponent;
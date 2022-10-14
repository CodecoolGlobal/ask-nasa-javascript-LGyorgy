import GalleryComponent from "../components/gallery/GalleryComponent";
import useDataFetching from "../utils/useDataFetching";
import "../css/GalleryApp.css";

const Gallery = () => {
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
                <GalleryComponent data={[...data].reverse()} />
            )}
        </div>
    );
}

export default Gallery;
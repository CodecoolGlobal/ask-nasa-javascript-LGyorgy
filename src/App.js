import { useState, useEffect } from "react";
import "./App.css";
export default App;

function App() {
  const pages = {
    apod: 0,
    gallery: 1,
  };

  const pageRenders = {
    [pages.apod]: <APoDApp />,
    [pages.gallery]: <GalleryApp />,
  };

  const switchPage = (to) => {
    setCurrentPage(to);
  };

  const [currentPage, setCurrentPage] = useState(pages.gallery);

  let pageLinks = (
    <div>
      <p><PageLink text="Astronomy Picture of the Day" onClick={() => switchPage(pages.apod)} /></p>
      <p><PageLink text="Gallery" onClick={() => switchPage(pages.gallery)} /></p>
    </div>
  )
  
  return (
    <div>
      {pageLinks}
      {pageRenders[currentPage]}
    </div>
  )
}

function PageLink(props) {
  return (
    <a href="#" onClick={props.onClick}>
      {props.text}
    </a>
  );
}

function APoDApp() {
  const apiUrl = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
  const [date, setDate] = useState((new Date).toISOString().substring(0,10));
  const getFullUrl = () => {
    return apiUrl + `&date=${date}`;
  };

  const [data, loading, error, setUrl] = useDataFetching(getFullUrl());

  useEffect(() => {
    setUrl(getFullUrl());
  }, [date])

  return (
    <div>
      <h1>Astronomy Picture of the Day</h1>
      <DatePicker date={date} onChange={(date) => {
          setDate(date);
        }}
      />
      {loading && <div>Loading...</div>}
      {error && (
        <div>There was an error while fetching data: {error}</div>
      )}
      {data && (
        <APoD data={data}/>
      )}
    </div>
  );
}

function DatePicker(props) {
  const handleChange = (e) => {
    props.onChange(e.target.value);
  }

  return (
    <form>
      <input onChange={handleChange} type="date" name="date" value={props.date}/>
    </form>
  );
}

function APoD(props) {
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
    mediaContent = <iframe className="apod-video" width="420" height="315" src={props.data.url}></iframe>;
  } else {
    mediaContent = <img className="apod-image" src={props.data.url} />
  }

  return (
    <div className="apod">
      <p className="apod-date">{ new Date(props.data.date).toLocaleDateString(dateLocales, dateOptions) }</p>
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

function GalleryApp() {
  const apiUrl = "https://6322dba8362b0d4e7dd4d80a.mockapi.io/gallery";

  const [data, loading, error, setUrl] = useDataFetching(apiUrl);

  return (
    <div className="gallery-app">
      <h1>Gallery</h1>
      {loading && <div>Loading...</div>}
      {error && (
        <div>There was an error while fetching data: {error}</div>
      )}
      {data && (
        <Gallery data={data} />
      )}
    </div>
  );
}

function Gallery(props) {
  return (
      <div className="gallery">{props.data.map( (item) => {
        return <GalleryImage {...item} />
      })}
      </div>
  );
}

function GalleryImage(props) {
  return <div className="gallery-item-card">
    <img className="gallery-image" width="auto" height="100px" src={props.url} alt={props.title}/>
    <p className="gallery-image-title">{props.title}</p>
  </div>;
}

function useDataFetching(defaultUrl) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(defaultUrl);

  const fetchData = async () => {
    setData(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(
          `HTTP error: The status is ${response.status}`
        );
      }
      let data = await response.json();
      setData(data);
      setError(null);
    } catch(err) {
      setError(err.message);
      setData(null)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return [data, loading, error, setUrl];
}
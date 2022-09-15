import { useState, useEffect } from "react";
export default App;

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [date, setDate] = useState((new Date).toISOString().substring(0,10));

  const apiUrl = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

  const fetchData = async () => {
    setData(null);
    try {
      const response = await fetch(apiUrl + `&date=${date}`);
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
  }, [date]);

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
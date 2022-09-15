import { useState, useEffect } from "react";
export default App;

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [date, setDate] = useState((new Date).toISOString().substring(0,10));

  const apiUrl = "https://6322dba8362b0d4e7dd4d80a.mockapi.io/apod";

  const fetchAPoDData = () => {
    setData(null);
    setLoading(true);
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `HTTP error: The status is ${response.status}`
          );
        }
        return response.json()
      })
      .then((data) => {
        setData(data)
        setError(null)
      })
      .catch((err) => {
        setError(err.message)
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false)
      })
  };

  useEffect(() => {
    fetchAPoDData();
  }, []);

  return (
    <div>
      <h1>Astronomy Picture of the Day</h1>
      <DatePicker date={date} onChange={(date) => {
          setDate(date);
          fetchAPoDData();
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

  return (
    <div className="apod">
      <p className="apod-date">{ new Date(props.data.date).toLocaleDateString(dateLocales, dateOptions) }</p>
      <img className="apod-image" src={props.data.url} />
      <p className="apod-title">
        <strong>{props.data.title}</strong>
      </p>
      <p className="apod-explanation">
        <strong>Explanation:</strong> {props.data.explanation}
      </p>
    </div>
  );
}
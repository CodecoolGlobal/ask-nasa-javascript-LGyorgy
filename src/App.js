export default App;

function App() {
  return (
    <div>
      <h1>Astronomy Picture of the Day</h1>
      <APoD />
    </div>
  );
}

function APoD() {
  const dateLocales = "en-US"
  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <div className="apod">
      <p className="apod-date">{ new Date("2022-09-15").toLocaleDateString(dateLocales, dateOptions) }</p>
      <img className="apod-image" src="https://apod.nasa.gov/apod/image/2209/HarvestMoonCastiglioneSicily1024.jpg" />
      <p className="apod-title">
        <strong>Harvest Moon over Sicily</strong>
      </p>
      <p className="apod-explanation">
        <strong>Explanation:</strong> For northern hemisphere dwellers, September's Full Moon was the Harvest Moon. Reflecting warm hues at sunset it rises over the historic town of Castiglione di Sicilia in this telephoto view from September 9. Famed in festival, story, and song Harvest Moon is just the traditional name of the full moon nearest the autumnal equinox. According to lore the name is a fitting one. Despite the diminishing daylight hours as the growing season drew to a close, farmers could harvest crops by the light of a full moon shining on from dusk to dawn.   Harvest Full Moon 2022: Notable Submissions to APOD
      </p>
    </div>
  );
}
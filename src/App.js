import { useState } from "react";
import APoDApp from "./APoDApp";
import GalleryApp from "./GalleryApp";
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

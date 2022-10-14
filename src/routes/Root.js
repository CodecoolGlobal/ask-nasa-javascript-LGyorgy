import { Link, Outlet } from "react-router-dom";

const Root = () => {
    let pageLinks = (
        <nav className="navbar px-3 navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Ask Nasa</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/apod">APoD</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/gallery">Gallery</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )

    return (
    <>
        {pageLinks}
        <div id="content" className="container">
            <Outlet />
        </div>
    </>
    )
}

export default Root;
import { Link, Outlet } from "react-router-dom";

const Root = () => {
    let pageLinks = (
        <div>
            <p>
                <Link to={"/apod"}>
                    Astronomy Picture of the Day
                </Link>
            </p>
            <p>
                <Link to={"/gallery"}>
                    Gallery
                </Link>
            </p>
        </div>
    )

    return (
        <div>
            {pageLinks}
            <Outlet />
        </div>
    )
}

export default Root;
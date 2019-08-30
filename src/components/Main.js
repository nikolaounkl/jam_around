import React from "react";
import { Link } from "react-router-dom";

const Main = props => {
    return (
        <>
            <h2 className="subtitle has-text-jam-secondary">
                Check out our top trending songs
            </h2>
            <button className="button is-dark is-rounded is-jam">
                <Link to="/songs">LOAD SONGS</Link>
            </button>
        </>
    );
};

export default Main;

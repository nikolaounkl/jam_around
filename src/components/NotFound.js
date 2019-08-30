import React from "react";

const NotFound = () => {
    return (
        <>
            <h2 className="is-size-4">
                <span className="has-text-jam">404</span> |{" "}
                <span className="has-text-jam-secondary">Page not found</span>
            </h2>
            <p className="lead">Sorry, this page does not exist</p>
        </>
    );
};

export default NotFound;

import React from "react";
import { Link } from "react-router-dom";

const CommentButton = ({ song }) => {
    return (
        <>
            <Link to={`/jam_around/songs/${song.id}/comments`}>
                <i className="far fa-comment"></i>&nbsp;{song.comments}
            </Link>
        </>
    );
};

export default CommentButton;

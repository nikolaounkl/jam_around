import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Comments = props => {
    const [comments, setComments] = useState({
        message: null
    });

    const handleChange = e => {
        e.preventDefault();
        setComments({
            [e.target.id]: e.target.value
        });
    };

    // A quick fix for my local environment to take care the issue with cors policy block
    const proxyurl = "http://cors-anywhere.herokuapp.com/";

    // Post data to be passed with the response
    const postData = {
        id: props.match.params,
        type: "song",
        message: comments.message
    };

    const postComment = e => {
        e.preventDefault();
        axios
            .post(
                proxyurl +
                    "http://api-stg.jam-community.com/interact/like?apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8",
                postData
            )
            .then(res => console.log(res))
            .then(props.history.push("/songs"))
            .catch(err => console.log(err));
    };

    return (
        <div className="comment-wrapper has-text-left">
            <Link to="/songs">
                <span className="icon has-text-jam-secondary">
                    <i className="fas fa-arrow-circle-left fa-2x "></i>
                </span>
            </Link>
            <br />
            <br />
            <article className="media">
                <div className="media-content">
                    <div className="field">
                        <p className="control">
                            <textarea
                                onChange={handleChange}
                                className="textarea"
                                id="message"
                                placeholder="Add a comment..."
                            ></textarea>
                        </p>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button
                                onClick={postComment}
                                className="button is-jam is-rounded"
                            >
                                POST COMMENT
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Comments;

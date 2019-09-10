import React, { useState } from "react";
import axios from "axios";

const LikeButton = ({ likesNum, songId }) => {
    const [likes, setLikes] = useState({
        count: likesNum,
        liked: false,
        id: songId
    });

    // A quick fix for my local environment to take care the issue with cors policy block
    const proxyurl = "https://cors-anywhere.herokuapp.com/";

    const handleClick = e => {
        e.preventDefault();
        setLikes({
            liked: !likes.liked,
            count: likes.liked ? likes.count - 1 : likes.count + 1
        });
        axios
            .post(
                proxyurl +
                    "https://api-stg.jam-community.com/interact/like?apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8&id=" +
                    likes.id
            )
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    const icon = likes.liked ? "fas fa-thumbs-up" : "far fa-thumbs-up";

    return (
        <>
            <i onClick={handleClick} className={icon}></i>&nbsp;{likes.count}
        </>
    );
};

export default LikeButton;

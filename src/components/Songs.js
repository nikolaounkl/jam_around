import React, { useState, useEffect } from "react";
import axios from "axios";
import LikeButton from "./LikeButton";
import PlayButton from "./PlayButton";
import Pagination from "./Pagination";
import CommentButton from "./CommentButton";

const Songs = props => {
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [songsPerPage] = useState(4);

    useEffect(() => {
        // A quick fix for my local environment to take care the issue with cors policy block
        const proxyurl = "http://cors-anywhere.herokuapp.com/";

        const fetchSongs = async () => {
            setLoading(true);
            const res = await axios.get(
                proxyurl + "http://api-stg.jam-community.com/song/trending"
            );
            setSongs(res.data);
            setLoading(false);
        };
        fetchSongs();
    }, []);

    // Pagination variables to help us get the 4 current songs for each selected page
    const indexOfLastSong = currentPage * songsPerPage;
    const indexOfFirstSong = indexOfLastSong - songsPerPage;
    const currentSongs = songs.slice(indexOfFirstSong, indexOfLastSong);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    if (loading) {
        return (
            <p>
                <span className="has-text-jam">Loading</span>{" "}
                <span className="has-text-jam-secondary">songs...</span>
            </p>
        );
    }

    return (
        <>
            <div className="songs-wrapper">
                {currentSongs.map(song => (
                    <div className="box" key={song.id}>
                        <div className="content has-text-left">
                            <span>SONG</span>
                            <h2>
                                <strong className="has-text-jam">
                                    {song.name}
                                </strong>
                            </h2>
                            <p>
                                By{" "}
                                <strong className="has-text-jam-secondary">
                                    {song.artist_name}
                                </strong>
                            </p>
                            <div className="button-bar">
                                <PlayButton url={song.music_file_path} />
                                <LikeButton
                                    likesNum={song.likes}
                                    songId={song.id}
                                />
                                <CommentButton song={song} />
                            </div>
                        </div>
                        <div>
                            <figure className="image jam-img">
                                <img src={song.cover_image_path} alt="" />
                            </figure>
                        </div>
                    </div>
                ))}
            </div>
            <Pagination
                songsPerPage={songsPerPage}
                totalSongs={songs.length}
                paginate={paginate}
            />
        </>
    );
};

export default Songs;

import React, { useState, useEffect } from "react";

const PlayButton = ({ url }) => {
    // Prepare & toggle play || pause audio function for the selected song
    const useAudio = url => {
        const [audio] = useState(new Audio(url));
        const [playing, setPlaying] = useState(false);

        const toggle = () => setPlaying(!playing);

        useEffect(() => {
            playing ? audio.play() : audio.pause();
        }, [playing, audio]);

        return [playing, toggle];
    };

    const [playing, toggle] = useAudio(url);

    return (
        <div>
            <button className="button is-jam is-rounded" onClick={toggle}>
                <strong>{playing ? "PAUSE" : "PLAY"}</strong>
            </button>
        </div>
    );
};

export default PlayButton;

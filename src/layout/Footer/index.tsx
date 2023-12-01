import { useState } from "react";

import Player from "../../components/Player";
import { CONSTANTS } from "../../constants/constants";
import { chill, jazzy, sleep } from "../../data/songData";
import { RootState, useAppSelector } from "../../store/store";
import "./styles.scss";

const Footer = () => {
  const data = useAppSelector((state: RootState) => state.mood);

  const { moodMode } = data;

  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  return (
    <div className="footer">
      <div className="song-name">
        {moodMode === "chill" ? (
          <span>Song name: {chill[currentSongIndex].name}</span>
        ) : moodMode === "jazzy" ? (
          <span>Song name: {jazzy[currentSongIndex].name}</span>
        ) : (
          <span>Song name: {sleep[currentSongIndex].name}</span>
        )}
      </div>
      <div className="controller" style={{ marginLeft: "-20px" }}>
        {moodMode === "chill" ? (
          <Player
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            songs={chill}
          />
        ) : moodMode === "jazzy" ? (
          <Player
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            songs={jazzy}
          />
        ) : (
          <Player
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            songs={sleep}
          />
        )}
      </div>
      <div className="author">
        Made by:
        <a
          href={CONSTANTS.AUTHOR_GITHUB_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="author-name"
        >
          {CONSTANTS.AUTHOR}
        </a>
      </div>
    </div>
  );
};

export default Footer;

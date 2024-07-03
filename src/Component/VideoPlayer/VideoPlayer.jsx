/* eslint-disable no-unused-vars */

import { useState } from "react";
import styles from "./VideoPlayer.module.css";

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div className={styles.App}>
      {!isPlaying ? (
        <div className={styles.videoContainer} onClick={playVideo}>
          <div className={styles.star}></div>
          <div className={styles.playButton}></div>
        </div>
      ) : (
        <div className={styles.videoPlayer}>
          <video width="800" height="600" controls autoPlay>
            <source src="/path/to/your/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;

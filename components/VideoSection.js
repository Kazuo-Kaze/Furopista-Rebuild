import React from 'react';
import styles from "../styles/Home.module.css";

const VideoSection = () => {
    return (
      <div className={styles.home__div45}>
        <video
          src="https://player.vimeo.com/external/444927988.hd.mp4?s=675cf308a4ec88d061ec436d4206416bb8411bf1&profile_id=175"
          autoPlay
          loop
          muted
          className={styles.home__video1}
        />
      </div>
    );
}

export default VideoSection

import React from "react";
import styles from "../styles/Home.module.css";

const First = () => {
  return (
    <>
      <div className={styles.home__div1} data-scroll-section>
        <div
          className={styles.home__div2}
          data-scroll
          data-scroll-direction="horizontal"
        >
          <h1>I a first section</h1>
        </div>
      </div>
    </>
  );
};

export default First;

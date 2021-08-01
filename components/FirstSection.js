import React from "react";
import styles from "../styles/Home.module.css";

const FirstSection = () => {
  return (
    <div className={styles.home__div3}>
      <div className={styles.home__div4}>
        <img
          src="https://api.fuoripista.it/assets/images/globals/transitions/_1200xAUTO_crop_center-center_none/Fuoripista-Tuo-Intro-t.png"
          className={styles.home__img1}
        />
      </div>
      <div className={styles.home__div5}>
        <div className={styles.home__div6}>
          <h1 data-scroll data-scroll-speed="1">
            TUO
          </h1>
          <h1 data-scroll data-scroll-speed="-1">
            TRAI
          </h1>
          <h1 data-scroll data-scroll-speed="1">
            NER
          </h1>
        </div>
        <div className={styles.home__div7}>
          <p>interactive wheel - on</p>
        </div>
      </div>
      <div className={styles.home__div8}>
        <div className={styles.home__div9}>
          <img
            src="https://api.fuoripista.it/assets/images/products/_1200xAUTO_crop_center-center_none/Fuoripista-Tuo-Specifiche-cover.jpg"
            className={styles.home__img2}
          />
        </div>
        <div className={styles.home__div10}>
          <h2>
            Interactive home trainer for indoor workouts. Engaging and realistic
            workouts.
          </h2>
        </div>
        <div className={styles.home__div11}>
          <img
            src="https://api.fuoripista.it/assets/images/products/Fuoripista-Tuo-Tagline-Circle.svg"
            className={styles.home__svg1}
          />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;

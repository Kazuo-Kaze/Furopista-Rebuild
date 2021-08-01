import React from 'react';
import styles from "../styles/Home.module.css";

const LastSection = () => {
    return (
      <div className={styles.home__div005}>
        <div className={styles.home__div54}>
          <img
            src="https://api.fuoripista.it/assets/images/products/design/_900xAUTO_crop_center-center_none/Fuoripista-Tuo-Colori-Legno-Ambientata.jpg"
            className={styles.home__img9}
          />
        </div>
        <div
          className={styles.home__div55}
          data-scroll
          data-scroll-speed="2"
          data-scroll-direction="vertical"
        >
          <img
            src="https://api.fuoripista.it/assets/images/products/design-gallery/_640xAUTO_crop_center-center_none/Fuoripista-Tuo-Design-Gallery-02.jpg"
            className={styles.home__img10}
          />
        </div>
        <div className={styles.home__div56}>
          <p>INTERACTIVE WHEEL-ON TRAINER</p>
        </div>
      </div>
    );
}

export default LastSection

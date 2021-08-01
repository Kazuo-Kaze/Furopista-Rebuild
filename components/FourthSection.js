import React from "react";
import styles from "../styles/Home.module.css";

const FourthSection = () => {
  return (
    <div className={styles.home__div32}>
      <div className={styles.home__div33}>
        <div className={styles.home__div34}>
          <h1>Style and performance.</h1>
          <h1>Elite's home trainer</h1>
          <h1>made in cooperation</h1>
          <h1>with Adriano Design.</h1>
        </div>
        <div className={styles.home__div35}>
          <p>ATTRACTIVE DURING USE, ELEGANT WHEN</p>
          <p>FOLDED.</p>
        </div>
      </div>
      <div className={styles.home__div36}>
        <div className={styles.home__div37} data-scroll data-scroll-speed="1">
          <h1>MADE</h1>
          <h1>IN</h1>
          <h1>ITALY</h1>
        </div>
        <div className={styles.home__div38}>
          <img
            src="https://api.fuoripista.it/assets/images/products/design/_480xAUTO_crop_center-center_none/Fuoripista-Tuo-MadeItaly.jpg"
            className={styles.home__img5}
          />
        </div>
      </div>
      <div className={styles.home__div39}>
        <div className={styles.home__div40}>
          <p>
            TUO has a sophisticated design that instantly makes it a{" "}
            <strong>piece of furniture</strong> compatible with different areas
            at home or in your workplace.
          </p>
        </div>
        <div className={styles.home__div41}>
          <p>
            When it's folded, TUO features a{" "}
            <strong>compact configuration</strong> so everything looks tidy and
            refined.
          </p>
        </div>
        <div className={styles.home__div42}>
          <div className={styles.home__div43}>
            <img
              src="https://www.fuoripista.it/_nuxt/b5204f5cc387958815c85c3a0fa1bebc.svg"
              className={styles.home__img6}
            />
          </div>
          <div className={styles.home__div44}>
            <h3>Download brochure</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;

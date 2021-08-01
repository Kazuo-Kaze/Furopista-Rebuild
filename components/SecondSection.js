import React from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import styles from "../styles/Home.module.css";

const SecondSection = () => {
  return (
    <div className={styles.home__div12}>
      <div className={styles.home__div13}>
        <div className={styles.home__div14}>
          <div className={styles.home__div15}>
            <h1>Realistic</h1>
            <h1>Workouts</h1>
          </div>
          <div className={styles.home__div16}>
            <p>
              <strong>
                You can ride on the selected courses as if you really were
                pedalling on them
              </strong>{" "}
              with TUO. Just install your bicycle on its frame and connect the
              home trainer to the power supply to start working out.
            </p>
            <p>
              The home trainer automatically adjust resistance by connecting to
              the selected software.
            </p>
          </div>
          <div className={styles.home__div00}>
            <div className={styles.home__div17}></div>
            <div className={styles.home__div18}>
              <p>Max gradient</p>
              <h1>10%</h1>
            </div>
            <div className={styles.home__div17}></div>
            <div className={styles.home__div19}>
              <p>Power measurement accuracy</p>
              <h1>5%</h1>
            </div>
            <div className={styles.home__div17}></div>
          </div>
        </div>
        <div className={styles.home__div20}>
          <div className={styles.home__div21}>
            <img
              src="https://api.fuoripista.it/assets/images/products/highlights/_1200xAUTO_crop_center-center_none/Fuoripista-Tuo-Highlight-01.jpg"
              className={styles.home__img3}
            />
          </div>
          <div className={styles.home__div22}>
            <div className={styles.home__div23}>
              <p>1/5</p>
            </div>
            <div className={styles.home__div24}>
              <div className={styles.home__div25}>
                <ArrowUpwardIcon className={styles.home__errow2} />
              </div>
              <div className={styles.home__div26}>
                <ArrowDownwardIcon className={styles.home__errow3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;

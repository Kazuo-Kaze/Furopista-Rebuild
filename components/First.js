import React from "react";
import styles from "../styles/Home.module.css";
import FifthSection from "./FifthSection";
import FirstSection from "./FirstSection";
import FourthSection from "./FourthSection";
import LastSection from "./LastSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import VideoSection from "./VideoSection";

const First = () => {
  return (
    <>
      <div className={styles.home__div1} data-scroll-section>
        <div
          className={styles.home__div2}
          data-scroll
          data-scroll-direction="horizontal"
        >
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <FourthSection />
          <VideoSection />
          <FifthSection />
          <LastSection />
        </div>
      </div>
    </>
  );
};

export default First;

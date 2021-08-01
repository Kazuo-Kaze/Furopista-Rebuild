import React from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <div
        className={styles.navbar}
        data-scroll-section
        data-scroll-direction="vertical"
      >
        <div className={styles.navbar__div1}>
          <div className={styles.navbar__div00}>
            <div className={styles.navbar__div2}>
              <Link href="" className={styles.home__link1}>
                <h3>Horizontal</h3>
              </Link>
            </div>
            <div className={styles.navbar__div3}>
              <div className={styles.navbar__div4}>
                <Link href="" className={styles.home__link1}>
                  <h3>Menu</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

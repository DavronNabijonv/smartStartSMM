import React from "react";
import styles from "./index.module.scss";
import c1 from "../../assets/images/c1.png";
import c2 from "../../assets/images/c2.png";

export default function Portfolio() {
  return (
    <div className={styles.port}>
      <div className={styles.pttl}>Portfolio</div>
      <div className={styles.pbody}>
        <div className={styles.grp1}>
          <img src={c1} className={styles.c1} />
          <img src={c2} className={styles.kichik1} />
        </div>
        <div className={styles.grp2}>
          <img src={c2} className={styles.kichik2} />
          <img src={c1} className={styles.c2} />
        </div>
        <div className={styles.grp3}>
          <img src={c1} className={styles.c3} />
          <img src={c2} className={styles.kichik3} />
        </div>
        <div className={styles.grp4}>
          <img src={c2} className={styles.kichik4} />
          <img src={c2} className={styles.kichik5} />
        </div>
      </div>
    </div>
  );
}

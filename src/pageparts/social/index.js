import React from "react";
import styles from "./index.module.scss";
import { socialfoy } from "../../db/smmfoy";

export default function Social() {
  return (
    <div className={styles.social}>
      <div className={styles.head}>
        <div className={styles.sttl}>SMM-Hal Qiladigon Narsalar</div>
      </div>
      <div className={styles.sbody}>
        {socialfoy.map((r) => (
          <div className={styles.grp}>
            <div className={styles.l1}>
              <p className={styles.gttl}>{r.nm}</p>
              <hr />
            </div>
            <p className={styles.gtxt}>{r.txt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

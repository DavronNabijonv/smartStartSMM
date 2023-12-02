import React from "react";
import styles from "./index.module.scss";
import s1 from "../../assets/images/s1.svg";
import jpgf from '../../assets/images/jpgf.jpg';

export default function Asosiy() {
  return (
    <div className={styles.asosiy}>
      <div className={styles.container}>
        <div className={styles.f1}>
          <p className={styles.smm}>smm</p>
          <p className={styles.social}>social media marketing</p>
        </div>
        <div className={styles.f2}>
          <div className={styles.p1}>
            <img src={s1} />
          </div>
          <div className={styles.p2}>
            <img src={s1} />
          </div>
        </div>
      </div>
      <p className={styles.prg}>
        Bizni raqobatchilardan ajratib turadigan narsa bizning shaxsiy
        yondashuvimizdir. Biz sizning noyob biznes ehtiyojlaringiz,
        maqsadlaringiz va maqsadli auditoriyangizni tushunish uchun vaqt
        ajratamiz,
      </p>
    </div>
  );
}

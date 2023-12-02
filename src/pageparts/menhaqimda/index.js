import React from "react";
import styles from "./index.module.scss";
import face from '../../assets/images/face.png'

export default function Aboutme() {
  return (
    <div className={styles.aboutme}>
      <div className={styles.container}>
        <div className={styles.f1}>
            <div className={styles.l1}></div>
            <div className={styles.l2}></div>
            <img src={face} />
        </div>
        <div className={styles.f2}>
          <div className={styles.head}>
            <p className={styles.attl}>Men Haqimda</p>
            <p className={styles.prg}>
              Grafik dizayn - bu shriftlar, matnlar, rasmlar yoki videolar
              yordamida ma'lumotlarni yetkazish Grafik dizayn - bu shriftlar,
              matnlar, rasmlar yoki videolar yordamida ma'lumotlarni yetkazish
              Grafik dizayn - bu shriftlar, matnlar, rasmlar yoki videolar
              yordamida ma'lumotlarni yetkazish usuli.
            </p>
          </div>
          <div className={styles.bd}>
            <div className={styles.group}>
              <p className={styles.prg2}>6</p>
              <p className={styles.txt}>Yil Tajriba</p>
            </div>
            <div className={styles.group}>
              <p className={styles.prg2}>99</p>
              <p className={styles.txt}>tugallangan loyihalar</p>
            </div>
            <div className={styles.group}>
              <p className={styles.prg2}>25</p>
              <p className={styles.txt}>tugallangan loyihalar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

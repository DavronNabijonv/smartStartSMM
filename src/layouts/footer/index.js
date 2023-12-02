import React from "react";
import styles from "./index.module.scss";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaInstagramSquare, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { PiFacebookLogoFill } from "react-icons/pi";


export default function Footer(props) {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.f1}>
          <p className={styles.main}>Menyu</p>
          <p className={styles.prgs}>Asosiy</p>
          <p className={styles.prgs}>Bo`limlar</p>
          <p className={styles.prgs}>SMM</p>
          <a href={props.jamoa} className={styles.prgs}>
            Jamoa
          </a>
          <a href={props.kontakt} className={styles.prgs}>
            Aloqa
          </a>
        </div>
        <div className={styles.f1}>
          <p className={styles.main}>Bo`limlar</p>
          <a href={props.we} className={styles.prgs}>
            Biz haqimizda
          </a>
          <a href={props.port} className={styles.prgs}>
            Portfolio
          </a>
          <a href={props.jamoa} className={styles.prgs}>
            Bizning Jamoa
          </a>
          <a href={props.asosiy} className={styles.prgs}>
            SMM
          </a>
          <a href={props.asosiy} className={styles.prgs}>
            Brend
          </a>
          <a href={props.social} className={styles.prgs}>
            SMM SOCIAL MEDIA MARKETING
          </a>
          <a href={props.kontakt} className={styles.prgs}>
            Kontaktlar
          </a>
        </div>
        <div className={styles.f2}>
          <p className={styles.main}>Ma'lumot</p>
          <div className={styles.withicon}>
            <FaLocationDot />
            <p className={styles.prgs2}>
              Andijon viloyati, Andijon shahar Buyuk Turon 21, Avtovokzal
              ortida.
            </p>
          </div>
          <div className={styles.withicon}>
            <FaPhone />
            <p className={styles.prgs2}>+998 95 204 08 00</p>
          </div>
          <div className={styles.withicon}>
            <FaInstagramSquare />
            <p className={styles.prgs2}>@start_smart_smm</p>
          </div>
          <div className={styles.network}>
            <FaTelegramPlane />
            <PiFacebookLogoFill/>
            <FaInstagramSquare/>
            <FaTwitter />
          </div>
        </div>
      </div>
      <div className={styles.pastki}>
        <hr/>
        <p>2023 @ Start Smar</p>
      </div>
    </div>
  );
}

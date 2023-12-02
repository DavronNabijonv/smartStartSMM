import React from 'react'
import styles from './index.module.scss'
import { FaPhone, FaLocationDot, FaSquareInstagram } from "react-icons/fa6";

export default function Aloqa() {
  return (
    <div className={styles.aloqa}>
        <div className={styles.attl}>Bog`laning</div>
        <div className={styles.abody}>
            <div className={styles.g1}>
                <FaPhone/>
                <p className={styles.tl}>Telefon</p>
                <p className={styles.n1}>+998 95 204 08 00</p>
                <p className={styles.n1}>+998 97 204 08 00</p>
            </div>
            <div className={styles.g1}>
                <FaLocationDot/>
                <p className={styles.tl}>Manzil</p>
                <p className={styles.n1}>Q948+9CJ Андижан</p>
            </div>
            <div className={styles.g1}>
                <FaSquareInstagram/>
                <p className={styles.tl}>Instagram</p>
                <p className={styles.n1}>@start_smart_smm</p>
            </div>
        </div>
    </div>
  )
}

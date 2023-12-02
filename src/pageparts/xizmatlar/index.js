import React from 'react'
import styles from './index.module.scss'
import { xizm } from '../../db/xizmatdb'
import y1 from '../../assets/images/y1.png'

export default function Xizmatlar() {
  return (
    <div className={styles.xizmat}>
        <div className={styles.xttl}>
            xizmatlar
        </div>
        <div className={styles.xbody}>
            {xizm.map((r)=>(
                <div className={styles.grp}>
                    <img src={y1} />
                    <p className={styles.txt}>{r.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

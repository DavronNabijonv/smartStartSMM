import React from 'react'
import styles from './index.module.scss'
import Jamoaslider from '../../components/slider'

export default function Jamoa() {
  return (
    <div className={styles.jamoa}>
        <div className={styles.jttl}>Jamoa</div>
        <div className={styles.jbody}>
            <Jamoaslider/>
        </div>
    </div>
  )
}

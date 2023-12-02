import React, { useState } from "react";
import styles from "./index.module.scss";
import "../../styles/style.scss";
import Rectangle from "../../assets/images/Rectangle.png";
import ss from "../../assets/images/ss.png";

export default function Navbar(props) {
  const [l1, setL1] = useState(false);
  const [l2, setL2] = useState(false);
  const [l3, setL3] = useState(false);
  const [l4, setL4] = useState(false);
  const [l5, setL5] = useState(false);
  return (
    <div className={styles.navbar}>
      <div className={styles.navigation}>
        <a
          href={props.asosiy}
          onClick={() => {
            !l1 && setL1(!l1);
            l2 && setL2(!l2);
            l3 && setL3(!l3);
            l4 && setL4(!l4);
            l5 && setL5(!l5);
          }}
          className={l1 ? styles.active : ""}
        >
          Asosiy 
        </a>
        <a
          href={props.xizmat}
          onClick={() => {
            l1 && setL1(!l1);
            !l2 && setL2(!l2);
            l3 && setL3(!l3);
            l4 && setL4(!l4);
            l5 && setL5(!l5);
          }}
          className={l2 && styles.active}
        >
          Xizmatlar
        </a>
        <a
          href={props.port}
          onClick={() => {
            l1 && setL1(!l1);
            l2 && setL2(!l2);
            !l3 && setL3(!l3);
            l4 && setL4(!l4);
            l5 && setL5(!l5);
          }}
          className={l3 && styles.active}
        >
          Portfolio
        </a>
        <a
          href={props.video}
          onClick={() => {
            l1 && setL1(!l1);
            l2 && setL2(!l2);
            l3 && setL3(!l3);
            !l4 && setL4(!l4);
            l5 && setL5(!l5);
          }}
          className={l4 && styles.active}
        >
          Video
        </a>
        <a
          href={props.kontakt}
          onClick={() => {
            l1 && setL1(!l1);
            l2 && setL2(!l2);
            l3 && setL3(!l3);
            l4 && setL4(!l4);
            !l5 && setL5(!l5);
          }}
          className={l5 && styles.active}
        >
          Kontaktlar
        </a>
      </div>
      <div className={styles.forshort}></div>
    </div>
  );
}

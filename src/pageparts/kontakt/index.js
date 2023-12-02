import React, { useState } from "react";
import styles from "./index.module.scss";

export default function Kontakt() {
  const [ism, setIsm] = useState("");
  const [fam, setFam] = useState("");
  const [num, setNum] = useState("");
  const [txt, setTxt] = useState("");
  const handleSubmit = () => {};
  return (
    <div className={styles.kontakt}>
      <div className={styles.f1}>
        <input
          type="text"
          value={ism}
          onChange={(e) => {
            setIsm(e.target.value);
          }}
          placeholder="Ism..."
        />
        <input
          type="text"
          value={fam}
          onChange={(e) => {
            setFam(e.target.value);
          }}
          placeholder="Familya..."
        />
        <input
          type="text"
          value={num}
          onChange={(e) => {
            setNum(e.target.value);
          }}
          placeholder="Tel..."
        />
      </div>
      <div className={styles.f2}>
        <textarea
          placeholder="Xabar"
          value={txt}
          onChange={(e) => {
            setTxt(e.target.value);
          }}
        />
        <button type="submit" onSubmit={handleSubmit}>
          Xabar Yuborish
        </button>
      </div>
    </div>
  );
}

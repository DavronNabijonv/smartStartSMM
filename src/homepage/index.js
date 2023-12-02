import React from "react";
import styles from "./index.module.scss";
import Navbar from "../layouts/navbar";
import Footer from "../layouts/footer";
import Asosiy from "../pageparts/asosiy";
import Xizmatlar from "../pageparts/xizmatlar";
import Aboutme from "../pageparts/menhaqimda";
import Aboutwe from "../pageparts/bizhaqimizda";
import Social from "../pageparts/social";
import Portfolio from "../pageparts/portfolio";
import Jamoa from "../pageparts/jamoa";
import Hamkor from "../pageparts/hamkor";
import Aloqa from "../pageparts/aloqa";
import Kontakt from "../pageparts/kontakt";

export default function MainPage() {
  return (
    <>
      <div className={styles.back}>
        <Navbar asosiy="#asosiy" xizmat="#xizmat" port="#portfolio" kontakt="#kontakt"/>
        <div id="asosiy">
          <Asosiy />
        </div>
        <div id="xizmat">
          <Xizmatlar />
        </div>
        <div id="me">
          <Aboutme />
        </div>
        <div id="we">
          <Aboutwe />
        </div>
      </div>
      <div className={styles.back2}>
        <div id="social">
          <Social />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="jamoa">
          <Jamoa />
        </div>
        <div id="hamkor">
          <Hamkor />
        </div>
        <div id="aloqa">
          <Aloqa />
        </div>
        <div id="kontakt">
          <Kontakt />
        </div>
      </div>
      <div id="footer">
        <Footer jamoa="#jamoa" we="#we" social="#social" kontakt="#kontakt" asosiy="#asosiy" port="#portfolio"  />
      </div>
    </>
  );
}

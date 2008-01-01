import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";
import styles from "./FloatBar.module.css";

export default function FloatBar() {
  return (
    <></>
  );
}

function Item({ title, description, onClick }) {
  return (
    <div className={styles.item} onClick={onClick}>
      <div style={{ flex: 1 }}>
        <div className={styles.itemTitle}>{title}</div>
        <div className={styles.itemDesc}>{description}</div>
      </div>
      <div className={styles.jiantou}></div>
    </div>
  );
}

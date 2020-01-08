import React from "react";
import styles from "./footer.css";
import { Link } from "react-router-dom";
import { CURRENT_YEAR } from "../../config";

const footer = () => {
  return (
    <div className={styles.footer}>
      <Link to="/" className={styles.logo}>
        <img alt="FHF logo" src="/images/fhf_logo.png" />
      </Link>
      <div className={styles.right}>
        @SOFTMATECH FHF {CURRENT_YEAR} All rights reserved.
      </div>
    </div>
  );
};

export default footer;

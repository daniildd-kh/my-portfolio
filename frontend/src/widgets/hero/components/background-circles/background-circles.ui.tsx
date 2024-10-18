import React, { forwardRef } from "react";
import styles from "./background-circles.module.css";
import classnames from "classnames";

export const BackgroundCircles = forwardRef<
  HTMLDivElement,
  { isInView?: boolean }
>(({ isInView = true }, ref) => {
  return (
    <div className={styles.area} ref={ref}>
      <ul
        className={classnames(styles.circles, { [styles.animate]: isInView })}
      >
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
});

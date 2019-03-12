import React from "react";
import { TwitterPicker } from "react-color";
import styles from "./ColorPicker.module.css";

function ColorPicker(props) {
  return (
    <div className={styles.container}>
      <div className={styles.selectedColorContainer}>
        <div
          className={styles.selectedColor}
          style={{ background: `${props.value}` }}
        />
      </div>
      <TwitterPicker
        color={props.value}
        colors={[
          "#f44336",
          "#e91e63",
          "#9c27b0",
          "#3f51b5",
          "#2196f3",
          "#00bcd4",
          "#009688",
          "#8bc34a",
          "#cddc39",
          "#ffeb3b",
          "#ffc107",
          "#ff9800",
          "#ff5722",
          "#795548"
        ]}
        onChange={color => props.onChange(color.hex)}
        triangle="hide"
        width="auto"
      />
    </div>
  );
}

export default ColorPicker;

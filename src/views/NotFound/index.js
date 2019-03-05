import React, { useState } from "react";
import { useInterval, useEventListener } from "../../hooks";
import "./NotFound.css";

const r2d2sounds = [
  require("../../assets/sounds/r2d2/1.mp3"),
  require("../../assets/sounds/r2d2/2.mp3"),
  require("../../assets/sounds/r2d2/3.mp3"),
  require("../../assets/sounds/r2d2/4.mp3"),
  require("../../assets/sounds/r2d2/5.mp3"),
  require("../../assets/sounds/r2d2/6.mp3"),
  require("../../assets/sounds/r2d2/7.mp3"),
  require("../../assets/sounds/r2d2/8.mp3"),
  require("../../assets/sounds/r2d2/9.mp3"),
  require("../../assets/sounds/r2d2/10.mp3"),
  require("../../assets/sounds/r2d2/11.mp3"),
  require("../../assets/sounds/r2d2/12.mp3"),
  require("../../assets/sounds/r2d2/13.mp3"),
  require("../../assets/sounds/r2d2/14.mp3"),
  require("../../assets/sounds/r2d2/15.mp3")
];

// Based on a BB8 pen by mxra8: https://codepen.io/mxra8/pen/oBvBQd
// Added sounds and animations for the eye
export default function() {
  const [state, setState] = useState({
    droidX: window.innerWidth / 2 - 500,
    toTheRight: true,
    speed: 2,
    accelMod: 1,
    mouseX: window.innerWidth / 2,
    audio: new Audio(),
    playing: false
  });

  // Get moving!
  const movement = () => {
    const { droidX, speed, accelMod, mouseX } = state;

    // Need a pretty strict if statement to make sure React doesn't end up in a
    // render loop with all the state changes / re-rendering going on.
    if (Math.abs(Math.round(droidX) - mouseX) !== 1) {
      const distance = mouseX - droidX;
      const acceleration = Math.abs(distance * accelMod) / 100;

      // Move to the right
      if (droidX < mouseX) {
        setState({
          ...state,
          droidX: droidX + speed * acceleration,
          toTheRight: true
        });
      }

      // Move to the left
      else {
        setState({
          ...state,
          droidX: droidX - speed * acceleration,
          toTheRight: false
        });
      }
    }
  };

  // Keep track of the mouse position.
  const handleMouseMove = event => {
    setState({
      ...state,
      mouseX: event.pageX
    });
  };

  useEventListener(
    "play",
    () => {
      setState({ ...state, playing: true });
    },
    state.audio
  );
  useEventListener(
    "ended",
    () => {
      setState({ ...state, playing: false });
    },
    state.audio
  );
  useEventListener("mousemove", handleMouseMove);
  useInterval(movement, 1);

  const playSound = () => {
    state.audio.src = r2d2sounds[Math.floor(Math.random() * r2d2sounds.length)];
    state.audio.load();
    state.audio.play();
  };

  const { droidX, toTheRight, mouseX } = state;

  return (
    <div className="not-found-container">
      <div className="error-code">404</div>
      <div className="error-code-detail">
        Oops! We couldn't find that, try again!
      </div>
      <div
        className="bb8"
        style={{ WebkitTransform: `translateX(${droidX}px) translateZ(0)` }}
        onClick={playSound}
      >
        <div
          className={"bb8-antennas " + (toTheRight ? "right" : "")}
          style={{
            WebkitTransform: `translateX(${(mouseX - droidX) /
              25}px) rotateZ(${(mouseX - droidX) / 80}deg) translateZ(0)`
          }}
        >
          <div className="bb8-antenna short" />
          <div className="bb8-antenna long" />
        </div>
        <div
          className="bb8-head"
          style={{
            WebkitTransform: `translateX(${(mouseX - droidX) /
              15}px) rotateZ(${(mouseX - droidX) / 25}deg) translateZ(0)`
          }}
        >
          <div className="stripe one" />
          <div className="stripe two" />
          <div className={"eyes " + (toTheRight ? "right" : "")}>
            <div className={"eye one " + (state.playing ? "titillate" : "")} />
            <div className="eye two" />
          </div>
          <div className={"stripe detail " + (toTheRight ? "right" : "")}>
            <div className="detail zero" />
            <div className="detail zero" />
            <div className="detail one" />
            <div className="detail two" />
            <div className="detail three" />
            <div className="detail four" />
            <div className="detail five" />
            <div className="detail five" />
          </div>
          <div className="stripe three" />
        </div>
        <div
          className="bb8-ball"
          style={{ WebkitTransform: `rotateZ(${droidX / 2}deg) translateZ(0)` }}
        >
          <div className="bb8-lines one" />
          <div className="bb8-lines two" />
          <div className="bb8-ring one" />
          <div className="bb8-ring two" />
          <div className="bb8-ring three" />
        </div>
        <div className="bb8-shadow" />
      </div>
    </div>
  );
}

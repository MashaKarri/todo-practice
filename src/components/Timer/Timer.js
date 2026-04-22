import { Component } from "react";

import { TimerText } from "./Timer.styled.js";

export class Timer extends Component {
  state = {
    time: 0,
  };

  interval = null;

  componentDidMount() {
    if (this.props.isRunning) {
      this.start();
    }
  }

  componentDidUpdate(previousProps) {
    if (previousProps.isRunning !== this.props.isRunning) {
      if (this.props.isRunning) {
        this.start();
      } else {
        this.stop();
      }
    }
  }

  componentWillUnmount() {
    this.stop();
  }

  start = () => {
    if (this.interval) return;

    this.interval = setInterval(() => {
      this.setState((previous) => ({
        time: previous.time + 1,
      }));
    }, 1000);
  };

  stop = () => {
    clearInterval(this.interval);
    this.interval = null;
  };

  render() {
    const { time } = this.state;

    const days = Math.floor(time / 86400);
    const hours = Math.floor((time % 86400) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const format = (num) => String(num).padStart(2, "0");

    return (
      <TimerText>
        {format(days)}:{format(hours)}:{format(minutes)}:{format(seconds)}
      </TimerText>
    );
  }
}

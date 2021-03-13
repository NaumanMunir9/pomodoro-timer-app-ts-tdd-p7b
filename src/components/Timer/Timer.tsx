import React, { Component } from "react";
import TimerButton from "../TimerButton/TimerButton";
import "./Timer.css";

class Timer extends Component {
  state = {
    minutes: 25,
    seconds: 0,
    isOn: false,
  };

  startTimer = () => {
    if (this.state.isOn === true) {
      return;
    }

    this.myInterval = setInterval(() => {
      const { minutes, seconds } = this.state;

      if (seconds > 0) {
        this.setState({
          seconds: seconds - 1,
        });
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState({
            minutes: minutes - 1,
            seconds: 59,
          });
        }
      }
    }, 1000);

    this.setState({ isOne: true });
  };

  stopTimer = () => {
    clearInterval(this.myInterval);
    this.setState({ isOn: false });
  };

  resetTimer = () => {
    this.stopTimer();
    this.setState({
      minutes: 25,
      seconds: 0,
    });
  };

  render = () => {
    const { minutes, seconds } = this.state;

    return (
      <div className="timer-container">
        <div className="time-display">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>

        <div className="timer-button-container">
          <div className="start-timer">
            <TimerButton buttonAction={this.startTimer} buttonValue={"Start"} />
          </div>

          <div className="stop-timer">
            <TimerButton buttonAction={this.stopTimer} buttonValue={"Stop"} />
          </div>
          <div className="reset-timer">
            <TimerButton buttonAction={this.resetTimer} buttonValue={"Reset"} />
          </div>
        </div>
      </div>
    );
  };
  myInterval!: NodeJS.Timeout;
}

export default Timer;

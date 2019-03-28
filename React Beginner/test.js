var PomodoroApp = createReactClass({
  IDLE: 0,
  WORK: 1,
  PAUSE: 2,
  getInitialState: function() {
    return { count: 0, timerState: this.IDLE };
  },
  getTimerElement: function() {
    var timerState = this.state.timerState;
    if (timerState == this.PAUSE)
      return (
        <Timer
          key="pause"
          title="Pause"
          color="green"
          minutes={5}
          onFinish={this.handleWork}
          onStop={this.handleIdle}
        />
      );
    if (timerState == this.WORK)
      return (
        <Timer
          key="work"
          title="Work"
          color="orange"
          minutes={25}
          onFinish={this.handlePause}
          onStop={this.handleIdle}
        />
      );
    return <Idle onStart={this.handleWork} />;
  },
  style: { display: "flex", flexDirection: "column", alignItems: "center" },
  render: function() {
    var count = this.state.count;
    return (
      <div style={this.style}>
        {" "}
        <h1>Pomodoro Timer</h1>
        {this.getTimerElement()}{" "}
        {!!count && <h2>You worked {count * 25} minutes today!</h2>}{" "}
      </div>
    );
  }
});

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { currentTime: 0, startTime: (new Date()) };
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
  }

  handleStart() {
      this.setState({ startTime: (new Date()) });
      this.intervalID = setInterval(() => {
      const elapsedMs = (new Date()) - this.state.startTime;
      this.setState({ currentTime: (elapsedMs / 1000) });
    }, 10);
  }

  handleStop() {
    clearInterval(this.intervalID);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.timeDisplay}>{this.state.currentTime}</Text>
        <TouchableOpacity onPress={this.handleStart}
                          activeOpacity={0.5}
                          style={styles.mainButton}>
          <Text style={styles.mainButtonText}>Start</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.handleStop}
                          activeOpacity={0.5}
                          style={styles.stopButton}>
          <Text style={styles.mainButtonText}>Stop</Text>

        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  timeDisplay: {
    fontSize: 45
  },

  mainButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1,
    borderColor: '#f55',
    width: 200,
    height: 75,
    backgroundColor: '#ff0'
  },

  stopButton: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1,
    borderColor: '#f55',
    width: 200,
    height: 75,
    backgroundColor: '#ff0'
  },

  mainButtonText: {
    fontWeight: 'bold',
    fontSize: 25
  }
});

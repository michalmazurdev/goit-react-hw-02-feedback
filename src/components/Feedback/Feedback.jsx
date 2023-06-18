import { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleChange = event => {
    const { name } = event.target;
    this.setState({ [name]: this.state[name] + 1 });
  };
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <h2>Please leave your feedback</h2>
        <button type="button" name="good" onClick={this.handleChange}>
          Good
        </button>
        <button type="button" name="neutral" onClick={this.handleChange}>
          Neutral
        </button>
        <button type="button" name="bad" onClick={this.handleChange}>
          Bad
        </button>

        <h2>Statistcis</h2>
        <span>Good: {good}</span>
        <span>Neutral: {neutral}</span>
        <span>Bad: {bad}</span>
      </div>
    );
  }
}

export default Feedback;

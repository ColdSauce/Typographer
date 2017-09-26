import React from 'react';
import ReactDOM from 'react-dom';

export default class Typographer extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			statefulGenerator: this.generator(props.children || props.text)
		};
	}

	componentDidMount() {
		this.typingTimer = setInterval(() => this.tick(), this.props.speed);
	}

	componentWillUnmount() {
		clearInterval(this.typingTimer);
	}

	tick() {
    const {statefulGenerator} = this.state;
		this.setState({
			statefulGenerator: statefulGenerator.next()
		});
	}

	generator(text) {
		return this.generatorHelper(text, 0);
	}

	generatorHelper(text, currentIndex) {
		const toReturn = {
			text: text.substring(0, currentIndex + 1),
			next: () => this.generatorHelper(text, currentIndex + 1),
		};

		return {
			...toReturn,
			finished: currentIndex < text.length,
		};
	}

  render() {
    const {statefulGenerator} = this.state;
    return (
      <span>
        {statefulGenerator.text}
      </span>
    );
  }

}

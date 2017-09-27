import React from 'react';

export default class Typographer extends React.PureComponent {
	static defaultProps = {
		separator: ' ',
		speed: 1
	};
	constructor(props) {
		super(props);
		this.state = {
			statefulGenerator: this.generator(props.children)
		};
	}

	componentDidMount() {
		this.typingTimer = setInterval(() => this.tick(), this.props.speed);
	}

	componentWillUnmount() {
		clearInterval(this.typingTimer);
	}

	tick() {
		const {
			statefulGenerator
		} = this.state;
		this.setState({
			statefulGenerator: statefulGenerator.next()
		});
	}

	generator(element) {
		return this.generatorHelper(this.extractContent(element), 0);
	}

	extractContent(element){
		switch (typeof element) {
			case "object": {
				if (this.props.extractCallback) {
					return this.extractContent(this.props.extractCallback(element));
				} else if (element.props) {
					return this.extractContent(element.props.children)
				} else if (element.length > 0) {
					return (element.map((t) => this.extractContent(t))).join(this.props.separator)
				}
				return this.props.separator
			}
			case "string":
			default:
				return element;
		}
	}

	generatorHelper(text, currentIndex) {
		return {
			text: text.substring(0, currentIndex + 1),
			next: () => this.generatorHelper(text, currentIndex + 1),
			finished: currentIndex < text.length
		};
	}

	render() {
		const {
			statefulGenerator
		} = this.state;
		return(
			<span>
        {statefulGenerator.text}
      </span>
		);
	}
}

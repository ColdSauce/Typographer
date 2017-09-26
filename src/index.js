import React from 'react';
import ReactDOM from 'react-dom';

class Typist extends React.Component {
    constructor(props) {
        super(props);
        this.state = { statefulGenerator: this.generator(props.text) };
    }

    componentDidMount() {
        this.typingTimer = setInterval(
            () => this.tick(), this.props.speed
        );
    }

    componentWillUnmount() {
        clearInterval(this.typingTimer);
    }

    render() {
        var statefulGenerator = this.state.statefulGenerator;
        return (<span> {statefulGenerator.text} </span>);
    }

    tick() {
        this.setState({
            statefulGenerator: this.state.statefulGenerator.next()
        });
    }

    generator(text) {
        return this.generatorHelper(text, 0);
    }

    generatorHelper(text, currentIndex) {
        const toReturn = {
            text: text.substring(0, currentIndex + 1),
            next: () => this.generatorHelper(text, currentIndex + 1)
        };
        if (currentIndex >= text.length) {
            return {
                ...toReturn,
                finished: true
            };
        } else {
            return  {
                ...toReturn
            };
        };
    }
}

export default Typist;

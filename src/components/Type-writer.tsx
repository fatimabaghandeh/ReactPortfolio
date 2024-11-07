import React from 'react';

interface TypewriterProps {
  text?: string;
  minTypeSpeed?: number;
  maxTypeSpeed?: number;
  initDelay?: number;
  className?: string;
}

interface TypewriterState {
  text: string;
}

class Typewriter extends React.Component<TypewriterProps, TypewriterState> {
  static defaultProps: TypewriterProps = {
    text: 'Give me something to type!',
    minTypeSpeed: 50,
    maxTypeSpeed: 90,
    initDelay: 700,
  };

  constructor(props: TypewriterProps) {
    super(props);
    this.state = {
      text: '',
    };
  }

  clicketyClack(
    text: string,
    minTypeSpeed: number,
    maxTypeSpeed: number,
    initDelay: number
  ): void {
    let str = '';
    let typeSpeed = 0;

    text.split('').forEach((c) => {
      typeSpeed += Math.random() * (maxTypeSpeed - minTypeSpeed) + minTypeSpeed;
      setTimeout(() => {
        str += c;
        this.setState({ text: str });
      }, initDelay + typeSpeed);
    });
  }

  componentDidMount() {
    this.clicketyClack(
      this.props.text!,
      this.props.minTypeSpeed!,
      this.props.maxTypeSpeed!,
      this.props.initDelay!
    );
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.state.text}
        <span className="bg-black bg-opacity-65 animate-caret">&nbsp; </span>
      </div>
    );
  }
}

export default Typewriter;

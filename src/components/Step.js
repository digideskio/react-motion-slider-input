import React from 'react';

class Step extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log("step clicked");
    this.props.onClick(this.props.index);
  }

  render() {
    const styles = {
      left: `${this.props.left}px`,
      top: `${this.props.top}px`,
      //display: (this.props.isVisible) ? 'block' : 'none',
      position: 'absolute',
    };

    const className = 'ReactMotionSliderInput-Step' +
      ((this.props.inRange !== null) ? ' ReactMotionSliderInput-in-range ReactMotionSliderInput-in-range-' + this.props.inRange : '') +
      ((this.props.className) ? ' ' + this.props.className : '');
    return (
      <a ref='span' className={className} style={styles} onClick={this.onClick}>
        <span className='ReactMotionSliderInput-Step-Inner' />
        <span className='ReactMotionSliderInput-Step-Label'>{this.props.label}</span>
      </a>
    );
  }
}
Step.propTypes = {
  index: React.PropTypes.number.isRequired,
  left: React.PropTypes.number.isRequired,
  top: React.PropTypes.number.isRequired,
  onClick: React.PropTypes.func.isRequired,
  label: React.PropTypes.string,
  inRange: React.PropTypes.number,
  className: React.PropTypes.string,
};
export default Step;

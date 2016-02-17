import React from 'react';
import cx from 'classnames';
import SuiCardMultimedia from '../sui-card-multimedia';
import SuiCardContent from '../sui-card-content';

class SuiCard extends React.Component {
  static get propTypes(){
    return {
      landscapeLayout: React.PropTypes.bool
    };
  }

  constructor(props){
    super(props);
    this.state = {
      landscapeLayout: this.props.landscapeLayout
    };
  }

  handleLayout(e){
    e.preventDefault();
    this.setState({
      landscapeLayout: !this.state.landscapeLayout
    });
  }

  render() {
    const classNames = cx({
      'sui-Card': true,
      'sui-Card--landscape': this.state.landscapeLayout
    });

    return (
      <div className={classNames}>
        <SuiCardMultimedia {...this.props}/>
        <SuiCardContent {...this.props} handleLayout={this.handleLayout.bind(this)}/>
      </div>
    );
  }
}

export default SuiCard;

import React from 'react';
import cx from 'classnames';
import SuiCardMultimedia from '../sui-card-multimedia';
import SuiCardContent from '../sui-card-content';

class SuiCard extends React.Component {
  static get propTypes(){
    return {
      landscapeLayout: React.PropTypes.bool,
      contentFirst: React.PropTypes.bool,
      data: React.PropTypes.object
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

  hasCardContent(){
    if(this.props.data.title || this.props.data.description){
      return (
        <SuiCardContent {...this.props} handleLayout={this.handleLayout.bind(this)}/>
      );
    }
  }

  render() {
    const classNames = cx({
      'sui-Card': true,
      'sui-Card--landscape': this.state.landscapeLayout,
      'sui-Card--contentfirst': this.props.landscapeLayout && this.props.contentFirst
    });

    return (
      <div className={classNames}>
        <SuiCardMultimedia {...this.props}/>
        {this.hasCardContent()}
      </div>
    );
  }
}

export default SuiCard;

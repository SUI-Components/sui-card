import React from 'react';

export default class TopContent extends React.Component {
  render(){
    return (
      <div className='sui-Card-topContent'>
        <a href={this.props.topImgLink}>
          <img src={this.props.topImg} />
        </a>
      </div>
    );
  }
}

TopContent.propTypes = {
  topImgLink: React.PropTypes.string,
  topImg: React.PropTypes.string
};

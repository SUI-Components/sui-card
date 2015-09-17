import React from 'react';

export default class BottomContent extends React.Component {
  render(){
    return (
      <div className='sui-Card-bottomContent'>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <a href={this.props.contactLink}>{this.props.contactLiteral}</a>
      </div>
    );
  }
}

BottomContent.propTypes = {
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  contactLink: React.PropTypes.string,
  contactLiteral: React.PropTypes.string
};

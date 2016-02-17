import React from 'react';

class SuiCardMultimedia extends React.Component {
  static get propTypes(){
    return {
      data: React.PropTypes.object
    };
  }

  render(){
    return (
      <div>
        {this.props.data.multimedia.map((media, index) => {
            return media.link ? (<a href={media.link} title={media.alt}><img className='sui-Card-image' src={media.src} alt={media.alt} key={index} /></a>)
                              : (<img className='sui-Card-image' src={media.src} alt={media.alt} key={index} />);
        })}
      </div>
    );
  }
}

export default SuiCardMultimedia;

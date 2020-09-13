import React from 'react';

class Image extends React.Component {
  render() {
    const { src, alternativeText } = this.props;
   return  <img src={src} alt={alternativeText} />;
  }
}

export default Image;
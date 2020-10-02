import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.user.name}</p>
        <p>{this.props.user.email}</p>
        <Image src={this.props.user.src} alt={this.props.user.altTxt} />
      </div>
    );
  }
}

export default UserProfile; 
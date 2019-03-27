import React, { Component } from 'react';

class User extends Component {
  render() {
    const { match } = this.props;
    console.log(match)
    return (
      <div>
        User:{match.params.user}
      </div>
    );
  }
}

export default User;
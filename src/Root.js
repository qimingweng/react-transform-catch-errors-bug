import React from 'react';

const decorator = Component => {
  return class Decorated extends React.Component {
    render() {
      return <Component {...this.props}/>;
    }
  }
}

@decorator
export default class Root extends React.Component {
  render() {
    throw new Error('Intentional Error');

    return <div>
      Hello World.
    </div>;
  }
}

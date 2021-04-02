import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: '',
  };

  componentDidCatch = (error, info) => {
    this.setState({
      hasError: true,
      errorMessage: error,
    });
  };

  render() {
    const { hasError, errorMessage } = this.state;

    return hasError ? <h1>{errorMessage}</h1> : this.props.children;
  }
}

export default ErrorBoundary;

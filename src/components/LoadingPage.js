import React from 'react'
import ReactLoading from 'react-loading';

class LoadingPage extends React.Component {
  state = {
    type: 'balls',
    delay: 1000,
    color: 'black',
    height: '20%',
    width: '20%'
  }

  render() {
    return (
      <div>
        <img src='./images/loading.gif' height={this.state.height} width={this.state.width} />
      </div>
    )
  }
}

export default LoadingPage

import React from 'react'

class NoMatch extends React.Component {

  getInfo = (event) => {
    let curleft = 0, curtop = 0;
    let obj = document.getElementsByClassName("snorlax")[0]
    if (obj.offsetParent) {
      do {
        curleft += obj.offsetLeft
        curtop += obj.offsetTop
      }
      while (obj = obj.offsetParent) {
        console.log("X", event.pageX - curleft)
        console.log("Y", event.pageY-curtop)
        console.log("-------------------------")
        if ((event.pageX - curleft) < 469 && (event.pageX - curleft) > 329 && (event.pageY - curtop) < 535 && (event.pageY - curtop) > 495) {
          this.props.history.goBack()
        }
      }
    }
    return undefined
  }


  render() {
    console.log(this.props.history)
    return(
      <div>
        <img src="/images/snorlax.gif" className="snorlax" onClick={(event) => this.getInfo(event)} style={{marginTop: '5%'}}/>
      </div>
    )
  }
}

export default NoMatch

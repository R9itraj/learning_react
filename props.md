import React from 'react'
import ReactDOM from 'react-dom'

var style={
  backgroundColor:'orange',
  color:'white'
}
class Message extends React.Component{
  render(){
    return(
      <div>
#        <h1>{this.props.msg}</h1>
      </div>
    )
  }
}


ReactDOM.render(
#  <Message msg="OutPut From COntainer?"/>,
  document.getElementById('root')
)
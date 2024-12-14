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
<<<<<<< HEAD
#        <h1>{this.props.msg}</h1>
=======
##        <h1>{this.props.msg}</h1>
>>>>>>> ac115581cd2275286dec8c7395153dbd7652250a
      </div>
    )
  }
}


ReactDOM.render(
<<<<<<< HEAD
#  <Message msg="OutPut From COntainer?"/>,
=======
##  <Message msg="OutPut From COntainer?"/>,
>>>>>>> ac115581cd2275286dec8c7395153dbd7652250a
  document.getElementById('root')
)

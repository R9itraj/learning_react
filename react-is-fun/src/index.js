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
        <h1>OutPut From COntainer</h1>
      </div>
    )
  }
}


ReactDOM.render(
  <Message/>,
  document.getElementById('root')
)
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
        <h1>{this.props.msg}</h1>
      </div>
    )
  }
}
class Calculator extends React.Component{
  getSum=(num1,num2)=>{
    return num1+num2;
  }
  render(){
    return(
      <div>
        <form action='#'>
          <input type='text' name="num1?" ></input>
          <input type='text' name="num2?"></input>
          <button type="submit">ADD</button>
        </form>
        <p>{this.getSum(this.props.num1,this.props.num2)}</p>
      </div>
    )
  }
}

ReactDOM.render(
  <div>
    <Message msg="OutPut From COntainer?"/>
    <Calculator num1="5" num2="10"/>
  </div>
  ,
  document.getElementById('root')
)
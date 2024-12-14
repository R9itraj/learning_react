import React from 'react'
import ReactDOM from 'react-dom'

var style={
  backgroundColor:'orange',
  color:'white'
}

const title=React.createElement(
'ul',{id:'title',className:'header',style:style},
React.createElement('li',
  {},
  'items-on-list'
)
)

ReactDOM.render(
  title,
  document.getElementById('root')
)
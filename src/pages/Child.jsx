import React from 'react'

// const Child = (props) => { 
  //console.log(props.value)
  // object destructuring
const Child = ({value}) => {
  // console.log(value)
  return (
    <div>Child component, using prop value:"{value}" from parent component</div>
  )
}

export default Child
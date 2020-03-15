import React from 'react'
import './Car.css'


export default (props) => (
  <div>
    <h1 style={{fontWeight:300}}>Марка:       {props.plant}</h1>
    <h1 style={{fontWeight:300}}>Модель:      {props.model}</h1>
    <h1 style={{fontWeight:300}}>Год выпуска: {props.year}</h1>
      <div style={{display:'flex'}}>
        <input
          type="text"
          value={props.model}
          onChange={props.onChangeName}/>
        <button style={{margin:'1% 5%'}}
          onClick={props.onChangeTitle}>
          BrandCALL
        </button>
        <button style={{margin:'1% 5%'}}
          onMouseOver={props.onDeleteHandlerAlarmArrowFunc}
          onMouseOut={props.onDeleteMouseOutProperty}
          onClick={props.onDelete}>
          Delete
        </button>
      </div>
    {/* <h1 style={{fontWeight:300}}>Пробег:      {props.km}</h1> */}
    {/* {props.children} */}
  </div>
)


// const Car = () => (
//   <div>
//     <h1 style={{fontWeight:300}}>Марка:</h1>
//     <h1 style={{fontWeight:300}}>Модель:</h1>
//     <h1 style={{fontWeight:300}}>Год выпуска:</h1>
//     <h1 style={{fontWeight:300}}>Пробег:</h1>
//   </div>
// )


// const Car = () => <h1 style={{fontWeight:300}}>Марка</h1>


// const Car = () => {
//   return(
//     <h1 style={{fontWeight:300}}>Марка</h1>
//   )
// }


// function Car() {
//   return(
//     <h1 style={{fontWeight:300}}>Марка</h1>
//   )
// }

// export default Car

// export default () => (
// <div>
//     <h1 style={{fontWeight:300}}>Марка:</h1>
//     <h1 style={{fontWeight:300}}>Модель:</h1>
//     <h1 style={{fontWeight:300}}>Год выпуска:</h1>
//     <h1 style={{fontWeight:300}}>Пробег:</h1>
//   </div>
// )
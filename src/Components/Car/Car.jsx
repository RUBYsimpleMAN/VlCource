import React from 'react'
import './Car.css'

class Car extends React.Component{

// UPDATE LIFECICLEs

  componentWillReceiveProps(nextProps) {
    console.log('Call Car componentWillReceiveProps inStatefullCarComponent', nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Call Car shouldComponentUpdate inStatefullCarComponent', nextProps, nextState)
    return nextProps.model.trim() !== this.props.model.trim()
  }

// ------------------------------------------------------------------------------------------
  componentWillUpdate(nextProps, nextState) {
    console.log('Call Car componentWillUpdate inStatefullCarComponent', nextProps, nextState)
  }
// STATIC метод - нет доступа к THIS
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('Call Car getDerivedStateFromProps inStatefullCarComponent', nextProps, prevState)
    return prevState
  }
// ------------------------------------------------------------------------------------------

  componentDidUpdate() {
    console.log('Call Car componentDidUpdate inStatefullCarComponent')
  }

  getSnapshotBeforeUpdate() {
    console.log('Call Car getSnapshotBeforeUpdate inStatefullCarComponent')
  }

// DELETE LIFECICLEs

  componentWillUnmount() {
    console.log('Call Car componentWillUnmount inStatefullCarComponent')
  }

  render() {
    console.log('Call Car render inStatefullCarComponent')

// if (Math.random() > .7) {
//   throw new Error('Error: Car random failed!')
// }

    return(
      <div>
        <h1 style={{fontWeight:300}}>Марка:       {this.props.plant}</h1>
        <h1 style={{fontWeight:300}}>Модель:      {this.props.model}</h1>
        <h1 style={{fontWeight:300}}>Год выпуска: {this.props.year}</h1>
          <div style={{display:'flex'}}>
            <input
              type="text"
              value={this.props.model}
              onChange={this.props.onChangeName}/>
            <button style={{margin:'1% 5%'}}
              onClick={this.props.onChangeTitle}>
              BrandCALL
            </button>
            <button style={{margin:'1% 5%'}}
              onMouseOver={this.props.onDeleteHandlerAlarmArrowFunc}
              onMouseOut={this.props.onDeleteMouseOutProperty}
              onClick={this.props.onDelete}>
              Delete
            </button>
          </div>
      </div>
    )
  }
}

export default Car

// export default (props) => (
//   <div>
//     <h1 style={{fontWeight:300}}>Марка:       {props.plant}</h1>
//     <h1 style={{fontWeight:300}}>Модель:      {props.model}</h1>
//     <h1 style={{fontWeight:300}}>Год выпуска: {props.year}</h1>
//       <div style={{display:'flex'}}>
//         <input
//           type="text"
//           value={props.model}
//           onChange={props.onChangeName}/>
//         <button style={{margin:'1% 5%'}}
//           onClick={props.onChangeTitle}>
//           BrandCALL
//         </button>
//         <button style={{margin:'1% 5%'}}
//           onMouseOver={props.onDeleteHandlerAlarmArrowFunc}
//           onMouseOut={props.onDeleteMouseOutProperty}
//           onClick={props.onDelete}>
//           Delete
//         </button>
//       </div>
//     {/* <h1 style={{fontWeight:300}}>Пробег:      {props.km}</h1> */}
//     {/* {props.children} */}
//   </div>
// )


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
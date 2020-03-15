import React, { Component } from 'react';
import './App.css';
import Car from '../src/Components/Car/Car';


class App extends Component {

  state = {
    stateCarsArray: [
      {plant: 'BMW', model: '238', year: '2018'},
      {plant: 'Kia', model: 'Rio', year: '2017'},
      {plant: '3A3', model: '968', year: '2019'}
    ],
    pageTitle: 'ТриАВТА',
    stateCarsVisible: false
  }

  // changeTitleHandler = (newTitle) => {
  //   this.setState({
  //     pageTitle: newTitle
  //   })
  // }

  changeTitleHandler = pageTitle => {
    this.setState({pageTitle})
  }

  toggleCarsHandler = () => {
    this.setState({
      stateCarsVisible: !this.state.stateCarsVisible
    })
  }

  // onChangeName variant general function 
  onChangeName(model, id) {
    console.log(model, id)
    const newCarModel = this.state.stateCarsArray[id]
    newCarModel.model = model
//  const newStateCarsArray = this.state.stateCarsArray.concat()
    const newStateCarsArray = [...this.state.stateCarsArray]
    newStateCarsArray[id] = newCarModel
    this.setState({ stateCarsArray: newStateCarsArray })
  }

  // onChangeName variant arrow function 

  // onChangeName variant general function 
  deleteHandler(id, model){ // без BIND  к THIS обращаться нельзя,
                   // т.к. обычная функция создаёт свой контекст
    console.log(model, id)
    console.log('method_Delete')
    this.setState({pageTitle: `'The Car' ${model} 'Was Deleted!'`})
    console.log(JSON.stringify(id, null, 2))
    const newStateCarsArrayForDelete = this.state.stateCarsArray.concat()
    newStateCarsArrayForDelete.splice(id, 1)
    this.setState({stateCarsArray: newStateCarsArrayForDelete})
  }

  // deleteHandler variant arrow function 
  deleteHandlerArrowFunc = () => {
    console.log('method_Delete_Alarm')
    this.setState({pageTitle: 'Will Be Deleted!'})
    // стрелочная функция не создаёт собственного контекста
    // поэтому через THIS мы обращаемся к контексту текущего компонента
  }

  onDeleteMouseOutMethod = () => {
    console.log('method_Delete_Alarm_Clear')
    this.setState({pageTitle: 'yeah... may be not just now...'})
    // стрелочная функция не создаёт собственного контекста
    // поэтому через THIS мы обращаемся к контексту текущего компонента
  }

  render() {
    console.log('Render')
    const divStyle = {
      'margin':  '1% 2%',
      'padding': '2% 2%',
      'border': '3px solid steelblue',
      'borderRadius': '12px'
    }

// jsFunctionForTransportValueToReturn_START

let visibleCars = null

if (this.state.stateCarsVisible) {
  visibleCars = this.state.stateCarsArray.map((everyCarInState, id) => {
    return(
      <div style={divStyle} key={id}>
        <Car
          // key={index}
          plant={everyCarInState.plant}
          model={everyCarInState.model}
          year= {everyCarInState.year}
          // onChangeTitle={this.changeTitleHandler.bind(this, everyCarInState.plant)}
          onChangeTitle={() => this.changeTitleHandler(everyCarInState.plant)}
          onChangeName={event => this.onChangeName(event.target.value, id)}
          onDelete={this.deleteHandler.bind(this, id)}
          onDeleteHandlerAlarmArrowFunc={this.deleteHandlerArrowFunc}
          onDeleteMouseOutProperty={this.onDeleteMouseOutMethod}
          // onDelete={this.deleteHandler.bind(this, id)}
        />
      </div>
    )
  })
}

// jsFunctionForTransportValueToReturn_END

    return (
      <div style={divStyle}>
        <h1
            style={{fontWeight:500,textAlign:"center"}}>
            {this.state.pageTitle}
        </h1>
        
        <button style=  {{marginLeft:'60%',
                          fontWeight:500}}
                onClick={this.toggleCarsHandler}>
          toggleCarsVisibility
        </button>
         
        { visibleCars } {/* FromJsFunctionForTransportValueToReturn */}

      </div>
    );
  }
}

export default App;











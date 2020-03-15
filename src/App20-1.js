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











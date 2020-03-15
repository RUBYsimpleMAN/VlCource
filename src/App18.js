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
    pageTitle: 'ТриАВТА'
  }

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }

  arrowFunctionHandleInput = (event) => {
    console.log('inpuText:', event.target.value)
    this.setState({
      pageTitle: event.target.value
    })
  }

  render() {
    console.log('Render')
    const divStyle = {
      'margin':  '1% 2%',
      'padding': '2% 2%',
      'border': '3px solid steelblue',
      'borderRadius': '12px'
    }

    // const constCars = this.state.stateCarsArray

      return (
        <div style={divStyle}>
          <h1
              style={{fontWeight:500,textAlign:"center"}}>
              {this.state.pageTitle}
          </h1>

          <input type="text" onChange={this.arrowFunctionHandleInput} />

          <button style=  {{marginLeft:'60%',
                            fontWeight:500}}
                  onClick={this.changeTitleHandler.bind(this, 'Changed!')}>
            ChangeTITLE
          </button>
           
            { this.state.stateCarsArray.map((everyCarInState, id) => {
              return(
                <div style={divStyle} key={id}>
                  <Car
                    // key={index}
                    plant={everyCarInState.plant}
                    model={everyCarInState.model}
                    year= {everyCarInState.year}
                    // onChangeTitle={this.changeTitleHandler.bind(this, everyCarInState.plant)}
                    onChangeTitle={() => this.changeTitleHandler(everyCarInState.plant)}
                  />
                </div>
              )
            }) }           
        </div>
      );
  }
}

export default App;











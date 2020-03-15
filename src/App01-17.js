import React, { Component } from 'react';
//import logo from './logo.svg';
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

  // changeTitleHandler = () => {
    // const oldTitle = this.state.pageTitle
    // const newTitle = oldTitle + '( змінено)'
    // this.setState({
      // pageTitle: newTitle
    // })
  // }

  // changeTitleHandler: function () {
  //   создание метода
  // }

  // changeTitleHandler() {
  //   создание метода как в обычном яп
  // }

  render() {
    console.log('Render')
    const divStyle = {
      'margin':  '1% 2%',
      'padding': '2% 2%',
      'border': '3px solid steelblue',
      'borderRadius': '12px'
    }

    const constCars = this.state.stateCarsArray

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
          <div style={divStyle}>
            <Car plant={constCars[0].plant}
                 model={constCars[0].model}
                 year= {constCars[0].year}
              onChangeTitle={this.changeTitleHandler.bind(this, constCars[0].plant)}
            />
          </div>
          <div style={divStyle}>
            <Car plant={constCars[1].plant}
                 model={constCars[1].model}
                 year= {constCars[1].year}
              onChangeTitle={() => this.changeTitleHandler(constCars[1].plant)}
            />
          </div>
          <div style={divStyle}>
            <Car plant={constCars[2].plant}
                 model={constCars[2].model}
                 year= {constCars[2].year}
              onChangeTitle={() => this.changeTitleHandler(constCars[2].plant)}
            />
          </div>
            {/* <Car plant={'BMW'} model={'238'} year={'2018'} km={78*338}>
              <p style={{color: 'red', fontWeight:900}}>COLOR</p>
            </Car>  
            <Car plant={'Kia'} model={'Rio'} year={'2017'} km={48*328}>
              <p style={{color: 'green', fontWeight:900}}>COLOR</p>
            </Car>  
            <Car plant={'3A3'} model={'968'} year={'2019'} km={75*368}>
              <p style={{color: 'blue', fontWeight:900}}>COLOR</p>
            </Car>   */}
        </div>
      );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello React World</h1>
//     </div>
//   );
// }

// class App extends Component {
//   render() {
//     return React.createElement(
//       'div',
//       {className: 'App'},
//         React.createElement(
//           'h1',
//           null,
//           'Hello React World!'
//         )
//     )
//   }
// }

export default App;











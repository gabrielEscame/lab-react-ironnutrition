import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';


class App extends Component {
  constructor(props) {
    super(props),
      this.state = {
        foods: foods,
        allFoods: foods,
        showForm: false,
        search: '',
      }
    this.callFoodForm = this.callFoodForm.bind(this)
    this.addFood = this.addFood.bind(this)
  }
  callFoodForm() {
    console.log('eai monica, blz?');

    this.setState({
      showForm: !this.state.showForm,
    })
  }

  addFood(newFood) {
    let foodCopy = [...this.state.foods];
    foodCopy.unshift(newFood)
    this.setState({
      foods: foodCopy,
      showForm: !this.state.showForm,
    })
  }

  handleSearch(event) {
    let foodCopy = [...this.state.allFoods];
    let { value } = event.target;
    let result = foodCopy.filter(e => {
      let nameLower = e.name.toLowerCase()
      return nameLower.includes(value)
    })
    this.setState({
      search: value,
      foods: result,
    })

  }

  render() {
    return (
      <div>
        <h1>Iron Nutrition</h1>
        <input type="text" name="search" value={this.state.search} onChange={(e) => this.handleSearch(e)} />
        <button onClick={this.callFoodForm}>Add new food</button>
        {this.state.showForm && <FoodForm addFood={this.addFood} />}
        {this.state.foods.map(e => {
          let { name, calories, image, quantity } = e;
          return (
            <FoodBox name={name} calories={calories} image={image} quantity={quantity}/>
          )
        }
        )}{


        }
      </div>
    )
  }
}

export default App;

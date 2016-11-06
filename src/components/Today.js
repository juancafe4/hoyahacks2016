import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

const style = {
  margin: 12
}

export default class Today extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      sodium: 0
    };
  }

  componentDidMount() {
    let nutritionFacts;
    axios.get('/api/nutritionfacts')
      .then(res => {
        nutritionFacts = res.data;
        console.log ('nutritionFacts:', nutritionFacts)
      })
      .catch(console.error);

    this.setState({
      calories: nutritionFacts.calories,
      protein: nutritionFacts.protein,
      carbs: nutritionFacts.carbs,
      fat: nutritionFacts.fat,
      sodium: nutritionFacts.sodium
    });
  }

  setGoal() {
    browserHistory.push('/preferences');
  }

  render() {
    let { calories, protein, carbs, fat, sodium } = this.state;
    return (
      <div className="container">
        <h1>How You're Doing</h1>
        <hr/>
        <h4>Total Calories: {calories}kcal</h4>
        <h4>Total Protein: {protein}g</h4>
        <h4>Total Carbohydrates: {carbs}g</h4>
        <h4>Total Fat: {fat}g</h4>
        <h4>Total Sodium: {sodium}mg</h4>
        <RaisedButton onClick={this.setGoal} label="Set Preferences" primary={true} style={style} />
      </div>
    )
  }
}

import React, { Component } from 'react';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12
}

export default class Goals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      sodium: 0
    }

    this.changeInput = this.changeInput.bind(this);
    this.setGoal = this.setGoal.bind(this);
    this.removeGoal = this.removeGoal.bind(this);
  }

  changeInput(e) {
    const key = e.target.dataset.key;
    const value = e.target.value;

    this.setState({
      [key]: value
    });
  }

  setGoal(e) {
    e.preventDefault();

    let { calories, protein, carbs, fat } = this.state;
    let obj = { calories, protein, carbs, fat, sodium };

    axios.post('/goals', obj)
      .then(res => res.data)
      .catch(console.error);
  }

  removeGoal(e) {
    e.preventDefault();

    this.setState({
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      sodium: 0
    })

    axios.delete('/goals')
      .then(res => res.data)
      .catch(console.error)
  }

  render() {
    return (
      <div>
        <h1>Goals</h1>
        <hr/>
        <h3>Per Day</h3>
        <form onSubmit={this.setGoal}>
          <label>Calories (kcal)</label>
          <input type="number" value={this.state.calories} data-key="calories" onChange={this.changeInput} />
          <br/>
          <label>Protein (g)</label>
          <input type="number" value={this.state.protein} data-key="protein" onChange={this.changeInput} />
          <br/>
          <label>Carbs (g)</label>
          <input type="number" value={this.state.carbs} data-key="carbs" onChange={this.changeInput} />
          <br/>
          <label>Fat (g)</label>
          <input type="number" value={this.state.fat} data-key="fat" onChange={this.changeInput} />
          <br/>
          <label>Sodium (mg)</label>
          <input type="number" value={this.state.sodium} data-key="sodium" onChange={this.changeInput} />
          <br/>
          <RaisedButton type="submit" label="Set" primary={true} style={style} />
          <RaisedButton onClick={this.removeGoal} label="Reset" secondary={true} style={style} />
        </form>
      </div>
    )
  }
}

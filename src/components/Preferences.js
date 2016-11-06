import React, { Component } from 'react';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

const style = {
  margin: 12
}

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

export default class Preferences extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      sodium: 0,
      milk: false,
      eggs: false,
      shellfish: false,
      treenuts: false,
      peanuts: false,
      wheat: false,
      soybean: false,
      gluten: false,
      goalsId: '',
      allergiesId: ''
    }

    this.changeInput = this.changeInput.bind(this);
    this.setGoal = this.setGoal.bind(this);
    this.removeGoal = this.removeGoal.bind(this);
    this.addAllergy = this.addAllergy.bind(this);
    this.setAllergies = this.setAllergies.bind(this);
  }

  componentDidMount() {
    let goals;
    let allergies;

    axios.get('/api/goals')
      .then(res => {
        if (res.data.length) {
          goals = res.data[0];
          this.setState({
            goalsId: goals._id
          })
        }
      })
      .catch(console.error)

    axios.get('/api/allergies')
      .then(res => {
        if (res.data.length) {
          allergies = res.data[0];
          this.setState({
            allergiesId: allergies._id
          })
        }
      })
      .catch(console.error)

    if (goals) {
      for (let key in goals) {
        let value = goals[key];
        this.setState({
          [key]: value
        })
      }
    }

    if (allergies.length) {
      for (let i = 0; i < allergies.length; i++) {
        let key = allergies[i];
        this.setState({[key]: true});
      }
    }
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

    let { calories, protein, carbs, fat, sodium } = this.state;
    let obj = { calories, protein, carbs, fat, sodium };

    axios.get('/api/goals')
      .then(res => {
        if (res.data.length) {
          axios.put(`/api/goals/${res.data[0]._id}`, obj)
            .then(res => res.data)
            .catch(console.error)
        } else {
          axios.post(`/api/goals`, obj)
            .then(res => res.data)
            .catch(console.error)
        }
      })
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

  addAllergy(isInputChecked, allergy) {
    const checkKey = allergy;
    if (isInputChecked) {
      this.setState({
        [checkKey]: true
      });
    } else {
      this.setState({
        [checkKey]: false
      })
    }
  }

  setAllergies() {
    let { milk, eggs, shellfish, treenuts, peanuts, wheat, soybean, gluten } = this.state;
    let allergyObj = { milk, eggs, shellfish, treenuts, peanuts, wheat, soybean, gluten };
    let allergyArray = [];
    for (let key in allergyObj) {
      let value = allergyObj[key];
      if (value) {
        allergyArray.push(key);
      }
    }

    axios.get('/api/allergies')
      .then(res => {
        if (res.data.length) {
          axios.put(`/api/allergies/${res.data[0]._id}`, allergyArray)
            .then(res => res.data)
            .catch(console.error)
        } else {
          axios.post(`/api/allergies`, allergyArray)
            .then(res => res.data)
            .catch(console.error)
        }
      })
  }

  render() {
    return (
      <div className="container">
        <h1>Daily Goals</h1>
        <hr/>
        <form onSubmit={this.setGoal}>
          <label>Calories (kcal): </label>
          <br />
          <TextField
            hintText="2000"
            value={this.state.calories}
            data-key="calories"
            onChange={this.changeInput}
          />
          <br/>
          <label>Protein (g): </label>
          <br />
          <TextField
            hintText="100"
            value={this.state.protein}
            data-key="protein"
            onChange={this.changeInput}
          />
          <br/>
          <label>Carbs (g): </label>
          <br />
          <TextField
            hintText="150"
            value={this.state.carbs}
            data-key="carbs"
            onChange={this.changeInput}
          />
          <br/>
          <label>Fat (g): </label>
          <br />
          <TextField
            hintText="50"
            value={this.state.fat}
            data-key="fat"
            onChange={this.changeInput}
          />
          <br/>
          <label>Sodium (mg): </label>
          <br />
          <TextField
            hintText="1300"
            value={this.state.sodium}
            data-key="sodium"
            onChange={this.changeInput}
          />
          <br/>
          <RaisedButton type="submit" label="Set" primary={true} style={style} />
          <RaisedButton onClick={this.removeGoal} label="Reset" secondary={true} style={style} />
        </form>
        <h1>Allergies</h1>
        <hr/>
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-md-3 col-lg-3">
              <Checkbox
                label="Milk"
                style={styles.checkbox}
                onCheck={(e, checked) => this.addAllergy(checked, 'milk')}
              />
              <Checkbox
                label="Eggs"
                style={styles.checkbox}
                onCheck={(e, checked) => this.addAllergy(checked, 'eggs')}
              />
            </div>
            <div className="col-sm-3 col-md-3 col-lg-3">
              <Checkbox
                label="Shellfish"
                style={styles.checkbox}
                onCheck={(e, checked) => this.addAllergy(checked, 'shellfish')}
              />
              <Checkbox
                label="Tree Nuts"
                style={styles.checkbox}
                onCheck={(e, checked) => this.addAllergy(checked, 'treenuts')}
              />
            </div>
            <div className="col-sm-3 col-md-3 col-lg-3">
              <Checkbox
                label="Peanuts"
                style={styles.checkbox}
                onCheck={(e, checked) => this.addAllergy(checked, 'peanuts')}
              />
              <Checkbox
                label="Wheat"
                style={styles.checkbox}
                onCheck={(e, checked) => this.addAllergy(checked, 'wheat')}
              />
            </div>
            <div className="col-sm-3 col-md-3 col-lg-3">
              <Checkbox
                label="Soybean"
                style={styles.checkbox}
                onCheck={(e, checked) => this.addAllergy(checked, 'soybean')}
              />
              <Checkbox
                label="Gluten"
                style={styles.checkbox}
                onCheck={(e, checked) => this.addAllergy(checked, 'gluten')}
              />
            </div>
          </div>
          <br/>
          <RaisedButton onClick={this.setAllergies} label="Save" primary={true} style={style} />
        </div>
      </div>
    )
  }
}

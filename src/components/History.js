import React, { Component } from 'react';

export default class History extends Component {
  constructor() {
    super()
    this.state = {
      history: [
        {
          date: "November, 7",
          calories: "950",
          fat: "20",
          sodium: "15",
          carbs: "50"
        },
        {
          date: "November, 6",
          calories: "700",
          fat: "15",
          sodium: "9",
          carbs: "30"
        },
        {
          date: "November, 5",
          calories: "200",
          fat: "10",
          sodium: "5",
          carbs: "60"
        },
        {
          date: "November, 4",
          calories: "50",
          fat: "9",
          sodium: "5",
          carbs: "50"
        },
        {
          date: "November, 3",
          calories: "180",
          fat: "0",
          sodium: "0",
          carbs: "0"
        },
        {
          date: "November, 2",
          calories: "950",
          fat: "20",
          sodium: "15",
          carbs: "50"
        },
        {
          date: "November, 1",
          calories: "230",
          fat: "25",
          sodium: "20",
          carbs: "80"
        }
      ]
    }
  }
  render() {
    // console.log("some",this.state.history);
    let viewHistory = this.state.history.map( (info,index) => {
      return (
        <div className="row" style={infoCard} key={index}>
          <h2>{info.date}</h2>
          <hr style={{borderColor: "grey"}}/>
          <h4>Calories: {info.calories}kcal</h4>
          <h4>Sodium: {info.sodium}mg</h4>
          <h4>Fat: {info.fat}g</h4>
          <h4>Carbs: {info.carbs}g</h4>
        </div>
      );
    });

    return (
      <div className="container">
        {viewHistory}
      </div>
    )
  }
}

const infoCard = {
  backgroundColor: "#f4f4f4",
  margin: "25px",
  borderColor: "#f4f4f4",
  borderStyle: "solid",
  borderWidth: "1px",
  borderRadius: "5px",
  padding: "10px"
};

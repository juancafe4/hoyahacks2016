import React, { Component } from 'react';
import axios from 'axios';

export default class Add extends Component {
  constructor(){
    super();
    this.state = {
      file: '',
      imgpreURL: '',
      nutritionfacts: ''
    };
    this._onInputChange = this._onInputChange.bind(this);
    this.getFacts = this.getFacts.bind(this);

  }

  getFacts(){
    // console.log("filechk",this.state.file);
    const data = new FormData();
    data.append('url', this.state.file);
    data.append('apikey', 'c6b0f6c65a88957');
    data.append('language', 'eng');
    axios.post('https://api.ocr.space/Parse/Image', data)
      .then(res => {
        let upc = res.data.ParsedResults[0].ParsedText.replace(/\s/g,"");
        axios.get(`https://api.nutritionix.com/v1_1/item?upc=${upc}&appId=a19f0c32&appKey=68538cd0fee344384aa30f8a3670a3a4`)
        .then(res => this.setState({ nutritionfacts : res.data }))
        .catch();
      })
      .catch();
  }

  _onInputChange(e) {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file,
        imgpreURL: reader.result
      });
      // this.p.uploadImg(this.state.file);
    };
    reader.readAsDataURL(file);
  }

  render() {
    // console.log("nutrition Facts",this.state.nutritionfacts);
    let NutriFactView = "";
    let { brand_name,
          item_name,
          nf_calories,
          nf_protein,
          nf_total_carbohydrate,
          nf_sodium,
          nf_total_fat } = this.state.nutritionfacts;
    if (this.state.nutritionfacts !== "") {
      NutriFactView = (
        <ul>
          <li><h2>{brand_name}</h2></li>
          <li><h3>{item_name}</h3></li>
          <li>Calories: {nf_calories}kcal</li>
          <li>Protiens: {nf_protein}g</li>
          <li>Carbs: {nf_total_carbohydrate}g</li>
          <li>Sodium: {nf_sodium}mg</li>
          <li>Fat: {nf_total_fat}g</li>
        </ul>
      );
    }
    return (
      <div className="row">
        <div className="col-sm-6">
          <h2>Add Nutrition facts</h2>
          <img width="150" src={this.state.imgpreURL} />
          <input type="file" onChange={this._onInputChange} />
          <button onClick={this.getFacts}>Get facts</button>
        </div>
        <div className="col-sm-6">
          {NutriFactView}
        </div>
      </div>
    )
  }
}

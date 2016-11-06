import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';

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
    this.addFact = this.addFact.bind(this);
  }

  getFacts(){
    // console.log("filechk",this.state.file);
    const data = new FormData();
    data.append('url', this.state.file);
    data.append('apikey', 'c6b0f6c65a88957');
    data.append('language', 'eng');
    axios.post('https://api.ocr.space/Parse/Image', data)
      .then(res => {
        // let upc = res.data.ParsedResults[0].ParsedText.replace(/\s/g,"");
        // axios.get(`https://api.nutritionix.com/v1_1/item?upc=${upc}&appId=a19f0c32&appKey=68538cd0fee344384aa30f8a3670a3a4`)
        // .then(res => this.setState({ nutritionfacts : res.data }))
        // .catch();
        this.setState({ nutritionfacts : res.data })
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

  addFact() {
    let parsedText = this.state.nutritionfacts.ParsedResults[0].ParsedText;
    browserHistory.push('/today');
    //console.log ('parsedText:', parsedText);
    // let nutritionFactObj = {
    //
    // }

    // axios.post('/api/nutritionfacts', this.state.nutritionfacts.ParsedResults[0].ParsedText)
    //   .then(() => {
    //     browserHistory.push('/today')
    //   })
    //   .catch(console.error)
  }

  render() {
    // console.log("nutrition Facts",this.state.nutritionfacts);
    let NutriFactView = "", imgView="";
    // let { brand_name,
    //       item_name,
    //       nf_calories,
    //       nf_protein,
    //       nf_total_carbohydrate,
    //       nf_sodium,
    //       nf_total_fat } = this.state.nutritionfacts;
    if (this.state.nutritionfacts !== "") {
      NutriFactView = (
        <div>
          {/* <h4>{this.state.nutritionfacts.ParsedResults[0].ParsedText}</h4> */}
          <div>
            <h2>Cheetos</h2>
            <hr/>
            <h3>Nutrition Facts</h3>
            <table className="table">
            {/* <thead>
              <th> </th>
            </thead> */}
             <tbody>
              <tr>
                <td>Calories</td>
                <td><i>140kcal</i></td>
              </tr>
              <tr>
                <td>Fat</td>
                <td><i>8g</i></td>
              </tr>
              <tr>
                <td>Sodium</td>
                <td><i>210mg</i></td>
              </tr>
              <tr>
                <td>Carbohydrates</td>
                <td><i>16g</i></td>
              </tr>
              <tr>
                <td>Protein</td>
                <td><i>2g</i></td>
              </tr>
            </tbody>
            </table>
          </div>
          <RaisedButton
            label="Add to Log"
            labelPosition="before"
            style={styles.button}
            containerElement="label"
            primary={true}
            onClick={this.addFact}
          />
        </div>
        // <ul>
        //   <li><h2>{brand_name}</h2></li>
        //   <li><h3>{item_name}</h3></li>
        //   <li>Calories: {nf_calories}kcal</li>
        //   <li>Protiens: {nf_protein}g</li>
        //   <li>Carbs: {nf_total_carbohydrate}g</li>
        //   <li>Sodium: {nf_sodium}mg</li>
        //   <li>Fat: {nf_total_fat}g</li>
        // </ul>
      );
    }
    if (this.state.imgpreURL !== "") {
      imgView = (<img width="150" src={this.state.imgpreURL} />);
    }
    return (
      <div className="row container">
        <div className="col-sm-6">
          <h2>Add Nutrition facts</h2>
          <hr/>
          <RaisedButton
            label="Select Image"
            labelPosition="before"
            style={styles.button}
            containerElement="label"
            primary={true}
          >
            <input type="file" onChange={this._onInputChange} style={styles.exampleImageInput} alt="SELECT IMAGE"/>
          </RaisedButton>
          {/* <input type="file" onChange={this._onInputChange} /> */}
          <RaisedButton label="Get Facts" onClick={this.getFacts} secondary={true} style={styles.button} />
          {/* <button onClick={this.getFacts}>Get facts</button> */}
          {imgView}
        </div>
        <div className="col-sm-6">
          {NutriFactView}
        </div>
      </div>
    )
  }
}

const styles = {
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

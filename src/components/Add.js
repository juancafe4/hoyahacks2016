import React, { Component } from 'react';
import axios from 'axios';

export default class Add extends Component {
  constructor(){
    super();
    this.state = {
      file: '',
      imgpreURL: ''
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
      .then(res => console.log(res.data))
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
    return (
      <div>
        <h2>Add Nutrition facts</h2>
        <img width="150" src={this.state.imgpreURL} alt="" />
        <input type="file" onChange={this._onInputChange} />
        <button onClick={this.getFacts}>Get facts</button>
      </div>
    )
  }
}

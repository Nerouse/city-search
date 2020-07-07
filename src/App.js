import React, { Component } from 'react';
import Handlesearch from './components/handlesearch'
import './App.css'
import axios from 'axios'
export class CitySearch extends Component {
  constructor(props){
    super(props);
    this.state = {data: [], city: "", isFound:false}
  }

  handleCityChange = (event) => {
    this.setState({city: event.target.value.toUpperCase()});
  }

  handlesearch = async () =>{
    let city = this.state.city;
    let link = 'http://ctp-zip-api.herokuapp.com/city/'+city;
    try{
        let result = await axios.get(link);
        this.setState({data: result.data, isFound: true});
      } catch (error){
        if(error.response){
            this.setState({isFound:false});
            console.log(error.response.data);
        }
      }
  console.log(this.state);
  }

  render() {
    return (
      <div className="city1">
      <h2><b>City Search</b></h2>
      <p>Enter City: 
          <input 
            type = "text"
            value = {this.state.value}
            onChange={this.handleCityChange} 
            placeholder="Enter City Name"/>  
          </p>
          <button className="searchButton" onClick = {this.handlesearch} > Search </button>
          <Handlesearch data = {this.state.data} city = {this.state.city} isFound = {this.state.isFound} />
      </div>
    );
  }
}
export default CitySearch
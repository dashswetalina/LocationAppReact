import React, { Component } from 'react';
import { MoonLoader } from 'react-spinners';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/SearchBar/SearchBar';
import WeatherDetails from '../../components/WeatherDetails/WeatherDetails';
import classes from './App.module.css';
import Card from '../../elements/Card/Card';
import Error from '../../components/Error/Error';


class App extends Component{
  state = {
    searchBarInput: '',
    weatherDetails: {
      temperature: null,
      description: '',
      name:'',
      coordinates:''
    },
    loading: false,
    error: false
  }

  // Update state with current search bar input
  searchBarHandler = (e) => {
    this.setState({
      searchBarInput: e.target.value
    })
  }

  // Reset state after clicking on Logo or Try Again button
  tryAgainHandler = () => {
    this.setState({
      searchBarInput: '',
      weatherDetails: {},
      error: false
    })
  }

  // Fetch weather information and update state
  setWeather = () => {
    const zipCode = this.state.searchBarInput;
    const API_URL = 'http://api.openweathermap.org/data/2.5/weather?zip='+zipCode+',us&appid=052f26926ae9784c2d677ca7bc5dec98';
    this.setState({
      weatherDetails: {},
      loading: true,
      error: false
    }, () => {
      // Executed as callback function
      fetch(API_URL)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          // If city exists, update weather details
          if(data.cod === 200) {
            this.setState({
              weatherDetails: {
                temperature: data.main.temp,
                description: 'Description: '+data.weather[0].main,
                name:'City: '+data.name,
                coordinates:'latitude: '+data.coord.lat +',longitude: '+data.coord.lon
              },
              loading: false
            });
          } else {
            // If city doesn't exist, throw error
            throw data.cod
          }
        })
        .catch(err => {
          console.log(err);
          this.setState({
            loading: false,
            error: true
          });
        });
    });
  }
  render() {

    // Conditionally render card content
    let cardContent ='';
    if (this.state.loading) {
      cardContent = <MoonLoader />;
    } else if (this.state.error) {
      cardContent = <Error onClickHandler={this.tryAgainHandler} />;
    } else if (this.state.weatherDetails.temperature && this.state.weatherDetails.description !== '') {
      // Display weather information if temperature and description exists
      cardContent = <WeatherDetails data={this.state.weatherDetails} />;
    }
  return (
    <div className={classes.AppWrapper}>
        <Header
        
          onClickHandler={this.tryAgainHandler} data='Coordinates Details'/>
        <main className={classes.AppMain}>
          <SearchBar
            value={this.state.searchBarInput}
            onChangeHandler={this.searchBarHandler}
            onClickHandler={this.setWeather}
            error={this.state.error} />
          <Card>
            {cardContent}
          </Card>
        </main>
        <Footer onClickHandler={this.tryAgainHandler} />
      </div>
  );
}
}

export default App;

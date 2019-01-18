import React, { Component } from 'react';
import './App.css';
import Sidebar from "react-sidebar";
import axios from 'axios';
import './test.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      title: "Click here",
      persons: []
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  changeFeature = () => {
    this.setState({ title: "Post" });
 };

 changePodcast = () => {
  this.setState({ title: "Podcast" });
};

changeReleases = () => {
  this.setState({ title: "Releases" });
};

changeChart = () => {
  this.setState({ title: "Charts" });
};


  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  componentDidMount(){
    document.title = "Movie Hub"
    axios.get(`https://bewc7jy4y8.execute-api.us-west-2.amazonaws.com/dev/JarJerLar`)
    .then(res => {
      const persons = res.data.message.rows;
      this.setState({ persons });
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Sidebar
        sidebar={<b>Sidebar Content Layout</b>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white" } }}
      >
          <div id="oof">
          <button id="sideController" onClick={() => this.onSetSidebarOpen(true)}>
          Search Movie
        </button>
            <button onClick={this.changeFeature} className="buttonHeader">POST</button>
            <button onClick={this.changePodcast} className="buttonHeader">EDIT</button>
            <button onClick={this.changeChart} className="buttonHeader">DELETE</button>
            <button onClick={this.changeReleases} className="buttonHeader">NEW RELEASES</button>
            <button onClick={this.changeDiscover} className="buttonHeader">DISCOVER</button>
          </div>
      </Sidebar>

      <div id="container">
        { this.state.persons.map(movie => 
        <div id="box"> 
        <h1>{movie.movie_title}</h1>
        <h3>{movie.movie_genre}</h3>
        <h2>{movie.movie_year_released} </h2>
        <img id="movid" src={movie.movie_picture} />
        </div>)}
        </div>
        </header>
      </div>



    );
  }
}

export default App;

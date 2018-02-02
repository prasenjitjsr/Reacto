import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Title extends React.Component{
  render(){
    return (<div>Title Textfc </div>);
  }
}
class Detail extends React.Component{
  render(){
    return (<div>Detail Text </div>);
  }
}
class Playlist extends React.Component{
  render(){
    return (
    <div className="Play" style={{'width':'20%','display':'inline-block'}}>
      <img/>
      <div>PlayList Name</div>
      <div>Artist Name</div>
     </div>
     );
  }
}
class App extends React.Component {
  render() {
    return (
      <div>
        <Title/>
        <Detail/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div>
    );
  }
}

export default App;

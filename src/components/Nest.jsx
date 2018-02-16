import React from 'react';
import Moment from 'moment';
import Display from './Display';
import Controls from './Controls';
import riakImg from './../assets/images/pets/riak.png';
import drinkMilk from './../assets/images/riak_drinking.png';

class Nest extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      image: riakImg,
      name:'Riak',
      satiety: 100,
      happiness: 100,
      energy: 100,
      health: 300
    };
    this.updateHunger = this.updateHunger.bind(this);
    this.updateHappiness = this.updateHappiness.bind(this);
    this.updateEnergy = this.updateEnergy.bind(this);
    this.updateHealth = this.updateHealth.bind(this);
    this.handleFeedClick = this.handleFeedClick.bind(this);
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handleNapClick = this.handleNapClick.bind(this);
  }

  componentDidMount() {
    setInterval(() =>
      this.updateHunger(),
    1300
    );
    setInterval(() =>
      this.updateHappiness(),
    700
    );
    setInterval(() =>
      this.updateEnergy(),
    1000
    );
  }

  // feedAnimation(){
  //   let image = this.state.image;
  //   this.setState({image : drinkMilk});
  // }

  handleFeedClick() {
    let feed = this.state.satiety + 40;
    this.setState({satiety: feed });
  }


  handlePlayClick(){
    let play = this.state.happiness + 30;
    this.setState({happiness: play});
  }

  handleNapClick(){
    let nap = this.state.energy + 50;
    this.setState({energy: nap});
  }

  updateHunger() {
    let newSatiety = this.state.satiety;
    if (this.state.satiety > 0) {
      newSatiety -= 1;
    } else {
      this.updateHealth();
    }
    this.setState({satiety : newSatiety});
  }

  updateHappiness() {
    let newHappiness = this.state.happiness;
    if (this.state.happiness > 0) {
      newHappiness -= 1;
    } else {
      this.updateHealth();
    }
    this.setState({happiness : newHappiness});
  }

  updateEnergy() {
    let newEnergy = this.state.energy;
    if (this.state.energy > 0) {
      newEnergy -= 1;
    } else {
      this.updateHealth();
    }
    this.setState({energy : newEnergy});
  }

  updateHealth() {
    let newHealth = this.state.health;
    newHealth = this.state.satiety + this.state.happiness + this.state.energy;
    this.setState({health : newHealth});
    if (this.state.health === 0) {
      clearInterval(this.hungerIntervals);
      clearInterval(this.happinessIntervals);
      clearInterval(this.energyIntervals);
    }
  }


  render(){
    return(
      <div>
        <Display pet={this.state}/>
        <Controls onFeedButtonPass={this.handleFeedClick} onPlayButtonPass={this.handlePlayClick} onNapButtonPass={this.handleNapClick}/>
      </div>
    );
  }
}

export default Nest;

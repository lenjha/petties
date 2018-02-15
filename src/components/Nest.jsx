import React from 'react';
import Moment from 'moment';
import Display from './Display';
import Controls from './Controls';
import riakImg from './../assets/images/pets/riak.png';

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

  }

  componentDidMount() {
    this.hungerIntervals = setInterval(() =>
      this.updateHunger(),
    50
    );
    this.happinessIntervals = setInterval(() =>
      this.updateHappiness(),
    50
    );
    this.energyIntervals = setInterval(() =>
      this.updateEnergy(),
    100
    );
    // this.healthIntervals = setInterval(() =>
    //   this.updateHealth(),
    // 1000
    // );
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
      console.log('DED');
    }
  }



  render(){
    return(
      <div>
        <Display pet={this.state}/>
        <Controls />
      </div>
    );
  }
}

export default Nest;

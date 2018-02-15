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
    1000
    );
    this.happinessIntervals = setInterval(() =>
      this.updateHappiness(),
    1000
    );
    this.energyIntervals = setInterval(() =>
      this.updateEnergy(),
    1000
    );
    this.healthIntervals = setInterval(() =>
      this.updateHealth(),
    1000
    );
  }

  updateHunger() {
    let newSatiety = this.state.satiety;
    newSatiety -= 1;
    this.setState({satiety : newSatiety});
  }
  updateHappiness() {
    let newHappiness = this.state.happiness;
    newHappiness -= 1;
    this.setState({happiness : newHappiness});
  }
  updateEnergy() {
    let newEnergy = this.state.energy;
    newEnergy -= 1;
    this.setState({energy : newEnergy});
  }

  updateHealth() {
    let newHealth = this.state.health;
    newHealth = this.state.satiety + this.state.happiness + this.state.energy;
    this.setState({health : newHealth});
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

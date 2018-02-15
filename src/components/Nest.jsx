import React from 'react';
import Moment from 'moment';
import Display from './Display';
import Controls from './Controls';
import riakImg from './../assets/images/pets/riak.png';

let masterPet ={
  image: riakImg,
  name:'Riak',
  satiety: 100,
  happiness: 100,
  energy: 100,
  health: 300
};


class Nest extends React.Component {

  getHungry(){

  }

  render(){
    return(
      <div>
        <Display pet={masterPet}/>
        <Controls />
      </div>
    );
  }
}

export default Nest;

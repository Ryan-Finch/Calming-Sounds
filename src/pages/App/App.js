import React, { Component } from 'react';
import './App.css';
import Title from '../../components/Title/Title'
import MoodButtons from '../../components/MoodButtons/MoodButtons'
import RiverBackground from '../../images/river.JPG'
import OceanBackground from '../../images/ocean.JPG'
import RainBackground from '../../images/rain.jpg'
import WhaleBackground from '../../images/whale.jpg'
import TitleBackground from '../../images/title1.jpg'
import MeditativeBackground from '../../images/meditative.jpg'
import RainSounds from '../../sounds/rain.mp3'
import {GetPlayList} from '../../sounds/RainSounds/RainSounds'
import OceanSounds from '../../sounds/ocean.mp3'
import RiverSounds from '../../sounds/river.mp3'
import WhaleSounds from '../../sounds/whale.mp3'
import MeditativeSounds from '../../sounds/meditative.mp3'
import {Howl} from 'howler';

class App extends Component{
  constructor(){
    super()
    this.state={
      background: `url(${TitleBackground})`,
      sounds: null,
      river: `url(${RiverBackground})`,
      ocean: `url(${OceanBackground})`,
      rain: `url(${RainBackground})`,
      whale: `url(${WhaleBackground})`,
      meditative: `url(${MeditativeBackground})`,
      playing: null
   }
  }

  handleMood = async mood =>{
    let playList= GetPlayList()

    let moodSound = await mood === 'rain' 
    ? [`${RainSounds}`]: mood === 'ocean' 
    ? [`${OceanSounds}`] : mood === 'river' 
    ? [`${RiverSounds}`] : mood === 'whale' 
    ? [`${WhaleSounds}`] : mood === 'meditative' 
    ? [`${MeditativeSounds}`]: null

    await this.setState({
      ...this.state,
      background: mood,
      sounds: moodSound
    })
    await this.handleSounds()
  }
  handleButtonClick=(e)=>{
    this.handleMood(e.target.id)
  }

  handleStop = e =>{

    if(this.state.playing){
      this.state.playing.unload()
    }

    this.setState({
      ...this.state,
      background: `url(${TitleBackground})`,
      playing: null
    })
  }
  handleSounds = async (i=0) =>{

    if(this.state.playing){
      this.state.playing.unload()
    }

    let length = this.state.sounds.length

    let sound = await new Howl({
      src:[`${this.state.sounds[i]}`],
      preload:true,
      onend: ()=>{
        if((i + 1) === length){
          i=0
          this.handleSounds(i)
        }else{
          console.log('here')
          i++
          this.handleSounds(i)
        }
      },
    });
   
    
    await sound.once('load', function(){
      sound.play();
    })
    this.setState({
      ...this.state,
      playing: sound
    })
  }


  render(){
    return (
        <div className="App" 
          style={{backgroundImage: 
            this.state.background === 'river'
            ? this.state.river : this.state.background === 'ocean' 
            ? this.state.ocean : this.state.background === 'rain' 
            ? this.state.rain : this.state.background === 'whale' 
            ? this.state.whale : this.state.background === 'meditative' 
            ? this.state.meditative : this.state.background}}>
          <MoodButtons 
            handleButtonClick={this.handleButtonClick}
            handleStop={this.handleStop}
          />
          <Title />
        </div>
    );
    }
}

export default App;

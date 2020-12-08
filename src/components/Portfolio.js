import React from 'react';
import './Portfolio.css'
import Portfolios from './Portfolios';
import ReactPlayer from 'react-player'

function Portfolio() {
  return (
    <div className='cards'>
      <h1>Neki od nasih radova</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <p className='hh'>3D Modeli</p>
          <ul className='cards__items'>
            <Portfolios
              src='images/1.jpg'
              
            />
            <Portfolios
              src='images/2.jpg'
              
              
            />
            <Portfolios
              src='images/3.png'
             
              
            />
          </ul>
          <p className='hh'>Graficki dizajn</p>
          <ul className='cards__items'>
            <Portfolios
              src='images/4.jpg'
              
           
            />
            <Portfolios
              src='images/5.jpg'
              
         
            />
            <Portfolios
              src='/images/6.jpg'
            />
          </ul>
          <p className='hh'>Reklame</p>
          
            <div className='cards__items'>
          <div className='player'> <ReactPlayer url='https://vimeo.com/474757729' width='400px' height='200px' /></div>
        <div className='player'><ReactPlayer url='https://vimeo.com/474758486' width='400px' height='200px' /></div>
        <div className='player'> <ReactPlayer url='https://vimeo.com/474756530' width='400px' height='200px' /></div>
        </div>
         
          
        </div>
        


      </div>
    </div>
    

  );
}

export default Portfolio;
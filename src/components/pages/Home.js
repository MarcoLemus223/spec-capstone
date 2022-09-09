import React from 'react'
import classes from './Home.module.css'

import beachImage from '../../assets/beach.jpg'

export default function Home() {
  return (
    <div className='home'>
      <div className={classes['beach-homescreen']}>
        <img src={beachImage} alt='homescreen'></img>
      </div>
      <div className='text'>
        <h4 className={classes.h4}>
          The best website to get all the beloved brands of sunglasses from Gucci, Prada, Oakley, Ray Bans, Burberry and Louis Vuitton
          <br></br>
          We've got the best prices out on the market that nobody can beat. Hope you enjoy your experience and shop with us again.
        </h4>
      </div>
    </div>
  )
}

import React from 'react';
import './Hero.css';

const Hero = () => {
  const slide =  {
    image: '/images/Home3.webp',
    title: 'Committed To Enhancing Lives',
    subtitle: '',
  }

  return (
    <div className="hero" style={{ backgroundImage: `url(${slide.image})` }}>
      <div className="hero-content">
        <h1>{slide.title}</h1>
        <p>{slide.subtitle}</p>
      </div>
    </div>
  );
};

export default Hero;

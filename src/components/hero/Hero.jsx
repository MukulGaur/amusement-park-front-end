import React from 'react'
import './hero.css';
import { Container } from 'react-bootstrap';

const Hero = () => {
  return (
    // <main className='hero-image'>
    //     <section className='container hero-text'>
    //         <h4>Welcome to</h4>
    //         <button id='hero-btn' className='btn btn-light btn-lg'><span className='h1'>TOMORROW LAND</span></button>
    //         <p>Checkout</p>
    //         <button className='btn btn-light'>Latest Events</button>
    //     </section>
    // </main>
    <section className="hero-section">
      <Container>
        <h1 className="hero-title">Welcome to Tomorrow Land</h1>
      </Container>
    </section>
  )
}

export default Hero
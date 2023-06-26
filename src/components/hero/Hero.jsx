import React from 'react'
import './hero.css';
import { Container } from 'react-bootstrap';

const Hero = () => {
  return (
    <section className="hero-section">
      <Container>
        <h1 className="hero-title">Welcome to Tomorrow Land</h1>
      </Container>
    </section>
  )
}

export default Hero
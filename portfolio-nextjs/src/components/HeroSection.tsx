'use client'

import { useEffect, useRef } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FaDownload } from 'react-icons/fa'
import Typed from 'react-typed'
import Image from 'next/image'

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = heroRef.current?.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="hero-content">
            <div className="fade-in-left">
              <h1 className="display-4 fw-bold mb-3">
                Hello, I'm{' '}
                <span className="lobster-font text-gradient">
                  Sufiyan Shaikh
                </span>
                <span className="ms-2">
                  <Image
                    src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"
                    alt="Hi"
                    width={50}
                    height={50}
                    className="d-inline-block"
                  />
                </span>
              </h1>
              
              <div className="fs-2 mb-4">
                <span>I am a </span>
                <span className="typing-text">
                  <Typed
                    strings={['Web Developer.', 'Programmer.', 'Web Designer.']}
                    typeSpeed={70}
                    backSpeed={70}
                    loop
                    smartBackspace={false}
                  />
                </span>
              </div>
              
              <p className="lead text-muted mb-4">
                Passionate about creating innovative web solutions with modern technologies.
                I specialize in full-stack development and love bringing ideas to life through code.
              </p>
              
              <div className="d-flex flex-wrap gap-3">
                <Button
                  href="/resume.pdf"
                  target="_blank"
                  className="btn-custom btn-primary-custom"
                  size="lg"
                >
                  <FaDownload className="me-2" />
                  Download CV
                </Button>
                
                <Button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  variant="outline-primary"
                  className="btn-custom btn-outline-custom"
                  size="lg"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </Col>
          
          <Col lg={6} className="text-center">
            <div className="fade-in-right">
              <div className="position-relative">
                <Image
                  src="https://raw.githubusercontent.com/abhisheknaiidu/abhisheknaiidu/master/code.gif"
                  alt="Coding Animation"
                  width={500}
                  height={400}
                  className="img-fluid rounded-4 shadow-lg hover-lift"
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 glass-effect rounded-4 d-flex align-items-center justify-content-center opacity-0 hover-opacity-100" style={{ transition: 'opacity 0.3s ease' }}>
                  <h3 className="text-white fw-bold">Let's Build Something Amazing!</h3>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroSection
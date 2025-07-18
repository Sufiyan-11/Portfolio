'use client'

import { useEffect, useRef } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Image from 'next/image'

interface Project {
  title: string
  image: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
}

const PortfolioSection = () => {
  const portfolioRef = useRef<HTMLElement>(null)

  const projects: Project[] = [
    {
      title: 'Weather App',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'A responsive weather application built with React that provides real-time weather information.',
      technologies: ['React', 'API Integration', 'CSS3'],
      githubUrl: 'https://github.com/Sufiyan-11/weather-app-react',
      liveUrl: 'https://weather-appp-react.netlify.app/'
    },
    {
      title: 'Movie App',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'A movie discovery app with search functionality and detailed movie information.',
      technologies: ['React', 'Movie API', 'Bootstrap'],
      githubUrl: 'https://github.com/Sufiyan-11/movie-app-react',
      liveUrl: 'https://movies-appp-react.netlify.app/'
    },
    {
      title: 'Morgan Website',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'A modern business website with responsive design and smooth animations.',
      technologies: ['React', 'CSS3', 'JavaScript'],
      githubUrl: 'https://github.com/Sufiyan-11/react-website',
      liveUrl: 'https://react-website-morgan.netlify.app/#/'
    },
    {
      title: 'Comforty E-commerce',
      image: 'https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'A full-featured e-commerce website for furniture with shopping cart functionality.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      githubUrl: 'https://github.com/Sufiyan-11/Ecom-website',
      liveUrl: 'https://comforty-chair-ecom.netlify.app'
    },
    {
      title: 'SeedKaro',
      image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'An agricultural platform connecting farmers with modern farming solutions.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      githubUrl: 'https://github.com/Sufiyan-11/Project-4',
      liveUrl: 'https://seedkaro-sufiyan-shaikh.netlify.app'
    },
    {
      title: 'Stack',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'A modern tech stack showcase website with interactive elements.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      githubUrl: 'https://github.com/Sufiyan-11/Stack',
      liveUrl: 'https://stack-by-sufiyanshaikh.netlify.app'
    },
    {
      title: 'Coffee Shop',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'A beautiful coffee shop website with menu and ordering system.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      githubUrl: 'https://github.com/Sufiyan-11/Coffee-shop',
      liveUrl: 'https://sufiyan-11.github.io/Coffee-shop/'
    },
    {
      title: 'Ark Studio',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'A creative studio portfolio website with modern design and animations.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      githubUrl: 'https://github.com/Sufiyan-11/Project-3',
      liveUrl: 'https://sufiyan-11.github.io/Project-3/'
    }
  ]

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

    const elements = portfolioRef.current?.querySelectorAll('.fade-in-up')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="portfolio" className="section-padding bg-light" ref={portfolioRef}>
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title display-5 fw-bold fade-in-up">Portfolio</h2>
            <p className="lead text-muted fade-in-up">
              A showcase of my recent projects and work
            </p>
          </Col>
        </Row>

        <Row>
          {projects.map((project, index) => (
            <Col lg={4} md={6} key={project.title} className="mb-4">
              <Card 
                className="card-custom h-100 fade-in-up hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="position-relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="card-img-top"
                    style={{ 
                      height: '250px', 
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex align-items-center justify-content-center opacity-0 hover-opacity-100" style={{ transition: 'opacity 0.3s ease' }}>
                    <div className="text-center">
                      <Button
                        href={project.githubUrl}
                        target="_blank"
                        variant="outline-light"
                        className="me-2 btn-custom"
                        size="sm"
                      >
                        <FaGithub className="me-1" />
                        Code
                      </Button>
                      <Button
                        href={project.liveUrl}
                        target="_blank"
                        variant="light"
                        className="btn-custom"
                        size="sm"
                      >
                        <FaExternalLinkAlt className="me-1" />
                        Live
                      </Button>
                    </div>
                  </div>
                </div>
                
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold text-gradient mb-3">
                    {project.title}
                  </Card.Title>
                  
                  <Card.Text className="text-muted mb-3 flex-grow-1">
                    {project.description}
                  </Card.Text>
                  
                  <div className="mb-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="badge me-2 mb-2"
                        style={{ 
                          background: 'var(--gradient-primary)',
                          color: 'white'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="d-flex justify-content-between">
                    <Button
                      href={project.githubUrl}
                      target="_blank"
                      variant="outline-primary"
                      className="btn-custom flex-fill me-2"
                      size="sm"
                    >
                      <FaGithub className="me-1" />
                      View Code
                    </Button>
                    <Button
                      href={project.liveUrl}
                      target="_blank"
                      className="btn-custom btn-primary-custom flex-fill"
                      size="sm"
                    >
                      <FaExternalLinkAlt className="me-1" />
                      Live Demo
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default PortfolioSection
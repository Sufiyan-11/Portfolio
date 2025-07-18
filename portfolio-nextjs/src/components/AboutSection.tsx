'use client'

import { useEffect, useRef } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { FaGraduationCap, FaBriefcase, FaExternalLinkAlt } from 'react-icons/fa'
import Image from 'next/image'

const AboutSection = () => {
  const aboutRef = useRef<HTMLElement>(null)

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

    const elements = aboutRef.current?.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="section-padding bg-light" ref={aboutRef}>
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title display-5 fw-bold fade-in-up">About Me</h2>
          </Col>
        </Row>
        
        <Row className="align-items-center mb-5">
          <Col lg={6} className="fade-in-left">
            <p className="lead text-muted">
              I'm a skilled programmer with a passion for coding and problem-solving. 
              I possess a deep understanding of various programming languages and have experience in developing web applications.
              I'm highly analytical and detail-oriented, and I thrive in an environment that requires logical thinking and attention to detail.
            </p>
            <p className="text-muted">
              My strong communication skills and ability to collaborate effectively make me a valuable team player, 
              and my dedication to staying up-to-date with the latest technologies and best practices ensures that I'm always 
              pushing the boundaries of what is possible in the field of programming.
            </p>
          </Col>
          
          <Col lg={6} className="text-center fade-in-right">
            <Image
              src="https://raw.githubusercontent.com/devSouvik/devSouvik/master/gif3.gif"
              alt="About Me"
              width={400}
              height={300}
              className="img-fluid rounded-4 shadow hover-lift"
            />
          </Col>
        </Row>

        <Row>
          <Col lg={6} className="mb-4">
            <div className="fade-in-left">
              <h3 className="fw-bold mb-4 text-gradient">
                <FaGraduationCap className="me-3" />
                Education
              </h3>
              
              <Card className="card-custom mb-4 hover-lift">
                <Card.Body className="gradient-bg text-white">
                  <div className="timeline-item">
                    <h4 className="fw-bold">Master's in Computer Application [MCA]</h4>
                    <h5 className="mb-2">Mumbai University</h5>
                    <p className="mb-2">Late Bhausaheb Hiray Institute of Computer Application</p>
                    <p className="mb-3">2020 - 2022</p>
                    
                    <ul className="mb-3">
                      <li>Research Paper Published in IJARSCT Journal</li>
                      <li>Certification Course of NPTEL Cloud Computing</li>
                    </ul>
                    
                    <div className="d-flex flex-wrap gap-2">
                      <Button
                        href="/research-paper.pdf"
                        target="_blank"
                        variant="outline-light"
                        size="sm"
                        className="btn-custom"
                      >
                        <FaExternalLinkAlt className="me-1" />
                        View Paper
                      </Button>
                      <Button
                        href="/certificate.pdf"
                        target="_blank"
                        variant="outline-light"
                        size="sm"
                        className="btn-custom"
                      >
                        <FaExternalLinkAlt className="me-1" />
                        View Certificate
                      </Button>
                      <Button
                        href="/cloud-computing.jpg"
                        target="_blank"
                        variant="outline-light"
                        size="sm"
                        className="btn-custom"
                      >
                        <FaExternalLinkAlt className="me-1" />
                        Cloud Computing Cert
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              <Card className="card-custom hover-lift">
                <Card.Body className="gradient-secondary text-white">
                  <div className="timeline-item">
                    <h4 className="fw-bold">Bachelor's in Information Technology [BSC.IT]</h4>
                    <h5 className="mb-2">Mumbai University</h5>
                    <p className="mb-2">Maharashtra College Of Arts, Science and Commerce</p>
                    <p>2016 - 2019</p>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col lg={6} className="mb-4">
            <div className="fade-in-right">
              <h3 className="fw-bold mb-4 text-gradient">
                <FaBriefcase className="me-3" />
                Experience
              </h3>
              
              <Card className="card-custom mb-4 hover-lift">
                <Card.Body className="gradient-bg text-white">
                  <div className="timeline-item">
                    <h4 className="fw-bold">Service Desk Analyst</h4>
                    <h5 className="mb-2">HCL</h5>
                    <p className="mb-3">February 2020 to November 2020</p>
                    
                    <ul>
                      <li>Handled incoming queries and help requests from end users over the phone</li>
                      <li>Resolved user's technical issues remotely by accessing user's computer and making changes to their system and settings</li>
                      <li>Helped users by resolving their issues while keeping their information confidential</li>
                    </ul>
                  </div>
                </Card.Body>
              </Card>

              <Card className="card-custom hover-lift">
                <Card.Body className="gradient-secondary text-white">
                  <div className="timeline-item">
                    <h4 className="fw-bold">Intern as Web Developer</h4>
                    <h5 className="mb-2">Late Bhausaheb Hiray Institute of Computer Application</h5>
                    <p className="mb-3">March 2022 to August 2022</p>
                    
                    <ul className="mb-3">
                      <li>Working as an Intern in College Incubation Center</li>
                      <li>Using .Net MVC framework we developed ERP Project for College</li>
                    </ul>
                    
                    <Button
                      href="/experience-letter.jpg"
                      target="_blank"
                      variant="outline-light"
                      size="sm"
                      className="btn-custom"
                    >
                      <FaExternalLinkAlt className="me-1" />
                      Experience Letter
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutSection
'use client'

import { useEffect, useRef, useState } from 'react'
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap'
import { FaEnvelope, FaPhone, FaWhatsapp, FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'
import Image from 'next/image'

const ContactSection = () => {
  const contactRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [showAlert, setShowAlert] = useState(false)

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

    const elements = contactRef.current?.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('https://formsubmit.co/a8dfc9ad9cd398273c974ec4cfdc8627', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setShowAlert(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setShowAlert(false), 5000)
      }
    } catch (error) {
      console.error('Error sending message:', error)
    }
  }

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/Sufiyan-11', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/sufiyan-shaikh-a53840190/', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com/Sufiyan_4', label: 'Twitter' },
    { icon: FaFacebook, url: 'https://www.facebook.com/', label: 'Facebook' },
    { icon: FaInstagram, url: 'https://www.instagram.com/sufiyan_sk_98/', label: 'Instagram' }
  ]

  return (
    <section id="contact" className="section-padding" ref={contactRef}>
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title display-5 fw-bold fade-in-up">Contact Me</h2>
            <p className="lead text-muted fade-in-up">
              Let's discuss your next project or just say hello!
            </p>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col lg={4} className="mb-4">
            <Card className="card-custom gradient-bg text-white h-100 fade-in-left">
              <Card.Body className="p-4">
                <h4 className="fw-bold mb-4">Get In Touch</h4>
                
                {showAlert && (
                  <Alert variant="success" className="mb-3">
                    Message sent successfully! I'll get back to you soon.
                  </Alert>
                )}
                
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      required
                      className="bg-white bg-opacity-20 border-0 text-white placeholder-light"
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                      className="bg-white bg-opacity-20 border-0 text-white placeholder-light"
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold">Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Type your message here..."
                      required
                      className="bg-white bg-opacity-20 border-0 text-white placeholder-light"
                    />
                  </Form.Group>
                  
                  <Button
                    type="submit"
                    variant="light"
                    className="btn-custom w-100"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} className="mb-4 fade-in-up">
            <div className="text-center text-lg-start">
              <div className="mb-4 d-flex align-items-center">
                <div className="me-3">
                  <FaEnvelope size={24} className="text-primary" />
                </div>
                <div>
                  <h6 className="fw-bold mb-0">Email</h6>
                  <p className="text-muted mb-0">sufiyanshaikh11121998@gmail.com</p>
                </div>
              </div>
              
              <div className="mb-4 d-flex align-items-center">
                <div className="me-3">
                  <FaPhone size={24} className="text-primary" />
                </div>
                <div>
                  <h6 className="fw-bold mb-0">Phone</h6>
                  <p className="text-muted mb-0">+91 9769068424</p>
                </div>
              </div>
              
              <div className="mb-4 d-flex align-items-center">
                <div className="me-3">
                  <FaWhatsapp size={24} className="text-success" />
                </div>
                <div>
                  <h6 className="fw-bold mb-0">WhatsApp</h6>
                  <p className="text-muted mb-0">
                    <a 
                      href="https://api.whatsapp.com/send?phone=8291455467" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-decoration-none text-muted"
                    >
                      +91 8291455467
                    </a>
                  </p>
                </div>
              </div>

              <div className="social-icons mt-4">
                <h6 className="fw-bold mb-3">Follow Me</h6>
                <div className="d-flex justify-content-center justify-content-lg-start">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="me-3"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Col>

          <Col lg={4} className="text-center fade-in-right">
            <Image
              src="https://raw.githubusercontent.com/abhisheknaiidu/abhisheknaiidu/master/code.gif"
              alt="Contact"
              width={400}
              height={300}
              className="img-fluid rounded-4 shadow hover-lift"
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactSection
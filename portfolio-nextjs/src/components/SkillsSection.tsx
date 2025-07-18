'use client'

import { useEffect, useRef, useState } from 'react'
import { Container, Row, Col, ProgressBar } from 'react-bootstrap'

interface Skill {
  name: string
  percentage: number
  color: string
}

const SkillsSection = () => {
  const skillsRef = useRef<HTMLElement>(null)
  const [animated, setAnimated] = useState(false)

  const skills: Skill[] = [
    { name: 'HTML', percentage: 90, color: '#e34c26' },
    { name: 'CSS', percentage: 85, color: '#1572b6' },
    { name: 'JavaScript', percentage: 65, color: '#f7df1e' },
    { name: 'React JS', percentage: 60, color: '#61dafb' },
    { name: 'Bootstrap', percentage: 85, color: '#7952b3' },
    { name: 'jQuery', percentage: 70, color: '#0769ad' },
    { name: 'Firebase', percentage: 60, color: '#ffca28' },
    { name: 'Git Hub', percentage: 75, color: '#181717' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
            setAnimated(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    const elements = skillsRef.current?.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="section-padding" ref={skillsRef}>
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title display-5 fw-bold fade-in-up">Skills</h2>
            <p className="lead text-muted fade-in-up">
              Technologies and tools I work with
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={10}>
            <Row>
              {skills.map((skill, index) => (
                <Col lg={6} key={skill.name} className="mb-4">
                  <div className={`fade-in-${index % 2 === 0 ? 'left' : 'right'}`}>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h6 className="fw-bold mb-0">{skill.name}</h6>
                      <span className="text-muted fw-bold">{skill.percentage}%</span>
                    </div>
                    
                    <div className="progress-custom mb-3">
                      <ProgressBar
                        now={animated ? skill.percentage : 0}
                        className="progress-bar-custom"
                        style={{
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                          transition: 'width 1.5s ease-in-out',
                          transitionDelay: `${index * 0.2}s`
                        }}
                      />
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg={12} className="text-center fade-in-up">
            <h4 className="fw-bold mb-4">Other Technologies</h4>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              {[
                'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'PHP', 
                'Python', 'C#', '.NET MVC', 'REST APIs', 'Responsive Design'
              ].map((tech, index) => (
                <span
                  key={tech}
                  className="badge bg-primary fs-6 px-3 py-2 hover-lift"
                  style={{
                    background: 'var(--gradient-primary)',
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default SkillsSection
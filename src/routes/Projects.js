import React, { useState } from 'react';
import "../styles/Projects.css";
import config from '../ProjectsConfig.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const Projects = () => {
    let [idx, setIdx] = useState(0);
<<<<<<< HEAD
    // Read ProjectsConfig.json and split them up into lists of 2
    const { projects } = config;

=======
    
    // Read ProjectsConfig.json and split them up into lists of 2
    const { projects } = config;
>>>>>>> gh-pages
    let projectSplit = [];
    for (let i = 0; i < projects.length; i += 2) {
        projectSplit.push(projects.slice(i, i + 2));
    }

    

    return (
        <div className="full-page" >
            <Container>
                <Row>
<<<<<<< HEAD
                    <h1>Projects</h1>
=======
                    <h1 id='project-title'>Projects</h1>
>>>>>>> gh-pages
                </Row>
                <Row xs={1} md={2} className="g-4">
                    {projects.map((project, index) => (
                        <Col key={index}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Card >
<<<<<<< HEAD
                                    <Card.Title>{project.title}</Card.Title>
=======
                                    <Card.Title className="card-title">{project.title}</Card.Title>
>>>>>>> gh-pages
                                    <Card.Img variant="top" src={project.image} />
                                    <Card.Body>
                                        <Card.Text>
                                            {project.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                    ))}
                </Row>      
            </Container>
        </div>
    );
};

export default Projects;
import React from 'react';
import styled from 'styled-components';
import projectsData from './project';


const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
`;

const TechStack = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 15px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -20px;
`;

const handleClick = (url) => {
  window.open(url);
};

const Projects = () => {
  const newProject = {
    name: 'Spotify Clone',
    techStack: 'HTML, CSS, JS',
    githubUrl: 'https://github.com/ironhack-labs/lab-css-spotify-clone',
  };

  return (
    <Container>
      {projectsData.concat(newProject).map((project, index) => (
        <Card key={index} onClick={() => handleClick(project.githubUrl)}>
          <Title>{project.name}</Title>
          <TechStack>{project.techStack}</TechStack>
        </Card>
      ))}
    </Container>
  );
};

export default Projects;

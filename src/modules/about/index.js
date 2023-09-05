import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  // List of skills and corresponding icons
  const skills = [
    { title: 'HTML', icon: 'icons8-html-100.png' },
    { title: 'CSS', icon: 'icons8-css-100.png' },
    { title: 'JavaScript', icon: 'icons8-javascript-100.png' },
    { title: 'React', icon: 'icons8-react-100.png' },
    { title: 'Bootstrap', icon: 'icons8-bootstrap-100.png' },
    { title: 'Django', icon: 'icons8-django-100.png' },
    { title: 'Python', icon: 'icons8-python-100.png' },
    { title: 'SQL', icon: 'icons8-sql-100.png' },
    { title: '.NET Framework', icon: 'icons8-.net-framework-100.png' },
    { title: 'ASP', icon: 'icons8-asp-100.png' },
    { title: 'Azure', icon: 'icons8-azure-100.png' },
    { title: 'C#', icon: 'icons8-c-sharp-64.png' },
    { title: 'Git', icon: 'icons8-merge-git-100.png' },
  ];
  
  // Render the About component
  return (
    <Container className="about_container">
      <Row className="Row">
        <Col xs={12} md={6} className="Col">
          <div className="about_card">
            <h2>About Me</h2>
            <p>
              Hi, there!<br />I am a highly motivated Software Developer with a postgraduate degree in Pedagogics. I have a passion for IT and a strong desire to transition into a software development career. I am seeking a challenging position where I can leverage my educational background, teamwork skills, and problem-solving abilities to deliver innovative solutions to customers.
            </p>
          </div>
          <div className="about_card">
            <h2>Education</h2>
            <p>
              <strong>Code Institute, Dublin, Ireland (Remote)</strong><br />
              Dec 2022 - Present<br />
              Diploma in Fullstack Software Development
            </p>
            <p>
              <strong>Lexicon – Malmö</strong><br />
              July 2023 - Present<br />
              .NET Developer
            </p>
            <p>
              <strong>University of Campus Kolding, Denmark</strong><br />
              Sept 2012 - March 2016<br />
              Postgraduate in Pedagogics
            </p>
          </div>
        </Col>
                {/* Right column for Volunteer Work and Skills */}
        <Col xs={12} md={6} className="Col">
          <div className="about_card">
            <h2>Volunteer Work</h2>
            <p>
              <strong>Solidarity worker in Mozambique</strong><br />
              2003<br />
              Organizing and training volunteer teachers to educate families on topics such as hygiene, diseases, sanitation, and AIDS.
            </p>
            <p>
              <strong>Special needs teacher in Ghana</strong><br />
              2015<br />
              Inclusive Learning Support: Assist students with special needs in an inclusive classroom setting, adapting lessons and providing personalized help.
            </p>
          </div>
          <div className="about_card">
            <h2>Skills</h2>
            <div className="skills_container">
              {skills.map((skill, index) => (
                <div className="skill" key={index}>
                  <img src={`./icons/${skill.icon}`} alt={skill.title} />
                  <p>{skill.title}</p>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

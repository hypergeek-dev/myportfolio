import React, { useState, useEffect } from 'react';

const Home = () => {
  const [imageSrc, setImageSrc] = useState("https://www.binarymonk.online/profil.png");
  const hoverImage = "https://www.binarymonk.online/profil_bw.png";
  const [typedText, setTypedText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const lines = [
      'I\'m a coder!',  
      'JavaScript Ninja',
      'CSS Wizard',
      'Lifelong Learner'
    ];

    let index = 0;
    let timeoutId;

    const typeLine = () => {
      const line = lines[currentLine];
      if (index <= line.length) {
        setTypedText(line.substring(0, index + 1));
        index++;
        timeoutId = setTimeout(typeLine, 100);
      } else {
        timeoutId = setTimeout(() => {
          setTypedText('');
          index = 0;
          setCurrentLine((prevLine) => (prevLine + 1) % lines.length);
          typeLine();
        }, 1000); 
      }
    };

    typeLine();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentLine]);

  return (
    <div className="position-absolute start-0 flex-container">
      <div className="nameWrapper">
          <h1><span className="letter_large">D</span>ennis Jensen</h1>
          <h5>{typedText}</h5>
          <div className="d-flex justify-content-center">
            <a href="https://www.linkedin.com/in/dennis-mariegaard-jensen-a974a8287/" className="social-icon mx-2">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/hypergeek-dev/" className="social-icon mx-2">
              <i className="fab fa-github"></i>
            </a>
          </div>
      </div>
      <div className="imgWrapper">
        <img 
          src={imageSrc} 
          alt="My profile"
          onMouseEnter={() => setImageSrc(hoverImage)}
          onMouseLeave={() => setImageSrc("https://www.binarymonk.online/profil.png")}
        />
      </div>
    </div>
  );
};

export default Home;

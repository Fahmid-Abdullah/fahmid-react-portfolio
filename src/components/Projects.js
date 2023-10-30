import React, { useState, useEffect } from 'react';
import loadingGif from '../assets/img/load.gif';

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [loading, setLoading] = useState(false);

    const projects = [
        {name: '[ JavaScript ] User Card Generator', description: "\nThis program generates a random user card everytime the button is clicked. The card contains full name, gender, employment title, employment key skill, and address.\n\nMakes use of Random Data API.\n\nInstructions: Download the HTML, CSS, and JavaScript files and place them in the same folder. Then, run the HTML file.\n\n\nTry it Out: https://github.com/Fahmid-Abdullah/user-card-generator"},
        {name: '[ JavaScript ] Stopwatch', description: "\nThis program is a standard stopwatch.\n\nInstructions: Download the HTML, CSS, and JavaScript files and place them in the same folder. Then, run the HTML file.\n\n\nTry it Out: https://github.com/Fahmid-Abdullah/stopwatch"},
        {name: '[ JavaScript ] Joke Generator', description: "\nThis program generates a random joke everytime the button is clicked.\n\nMakes use of Joke API.\n\nInstructions: Download the HTML, CSS, and JavaScript files and place them in the same folder. Then, run the HTML file.\n\n\nTry it Out: https://github.com/Fahmid-Abdullah/joke-generator"}, 
        {name: '[ JavaScript ] Color Picker', description: "\nThis program allows the user to adjust RGB sliders to create any color. The HEX is autocopied to clipboard.\n\nInstructions: Download the HTML, CSS, and JavaScript files and place them in the same folder. Then, run the HTML file.\n\n\nTry it Out: https://github.com/Fahmid-Abdullah/color-picker"},
        {name: '[ Python ] Sentiment Analysis', description: "\nThis program analyzes tweets for keywords and calculates average happiness value, count of keyword tweets, and count of tweets in each region.\n\nInstructions: Coming soon!\n\n\nTry it Out: https://github.com/Fahmid-Abdullah/sentiment_analysis"},
        {name: '[ Java ] Winter Olympics', description: "\nThis program finds the best path in a hill which is represented by a binary tree which the skier must get through to reach the bottom.\n\nInstructions: Coming soon!\n\n\nTry it Out: https://github.com/Fahmid-Abdullah/winter_olympics"},
        {name: '[ C ] World Cup', description: "\nThis program maintains a database of teams and players. The user can insert, delete, search for, replace, and print a team or player.\n\nInstructions: Coming soon!\n\n\nTry it Out: https://github.com/Fahmid-Abdullah/WorldCup"},
        {name: '[ Assembly ] UPC_Validator', description: "\nThis program analyzes a given UPC code and verifies if the code is valid or invalid.\n\nInstructions: Coming soon!\n\n\nTry it Out: https://github.com/Fahmid-Abdullah/UPC_Validator"},
    ];

    const handleProjectClick = (index) => {
        setSelectedProject(projects[index]);
        setLoading(true);
    };

    useEffect(() => {
      const delay = setTimeout(() => {
          setLoading(false);
          clearTimeout(delay);
      }, 1000);

      return () => {
          clearTimeout(delay);
      };
  }, [selectedProject]);
    
    return (
        <div className="project" >
            <div className="project-title" id="projects">
            <h2 >PROJECTS</h2>
            <h4><br/>To develop my experience and knowledge, I engage in diverse projects, participating in hackathons, taking the lead in developer club initiatives, and pursuing personal projects. These experiences provide me with the essential tools to effectively tackle more complex challenges.<br/><br/></h4>
            </div>
        <div className="project-container">
            <ProjectList projects={projects} onProjectClick={handleProjectClick}/>
            <ProjectDescription project={selectedProject} loading={loading}/>
        </div>
        </div>
    )
}

export const ProjectList = ({ projects, onProjectClick}) => {
    return (
        <div className='project-list'>
            {projects.map((project, index) => (
                <div
                key={index}
                className="project-box"
                onClick={() => onProjectClick(index)}
                >
                    {project.name}
                </div>
            ))}
        </div>
    )
}

export const ProjectDescription = ({ project, loading }) => {
  return (
      <div className="project-description">
          {loading ? (
            
              <div className='loading-container'> <img src={loadingGif} alt="Loading" /> </div>
          ) : project ? (
              <div>
                  <h3>{project.name}</h3>
                  <p className='project-text'>
                      {project.description.split('\n').map((text, index) => {
                          if (text.startsWith("Try it Out:")) {
                              const link = text.match(/https:\/\/\S+/);
                              if (link) {
                                  return (
                                      <span key={index}>
                                          Try it Out: <a className="link" href={link[0]} target="_blank" rel="noopener noreferrer">
                                              {link[0]}
                                          </a>
                                      </span>
                                  );
                              }
                          }
                          return (
                              <span key={index}>
                                  {text}
                                  <br />
                              </span>
                          );
                      })}
                  </p>
              </div>
          ) : (
              <p>Select a project to see its description.</p>
          )}
      </div>
  );
};
  
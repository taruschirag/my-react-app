import React from 'react'
import FinLit from '../assets/FinLit.jpg';
import TradingProj from '../assets/TradingProject.jpg';
import Scraper from '../assets/webscraper.jpg';
import FoodReview from '../assets/Food_Review.jpg';
import Fire from '../assets/Fire.jpg';
import TennisAlliance from '../assets/TennisAlliance.jpg';
import "../pages/Projects.css";

const projects = [
  {
    imageUrl: FinLit,
    description: 'FinLitFrenzy (Financial Literacy Frenzy) is a website that offers a range of courses on financial literacy and related topics like Personal Finance, taxation, retirement planning, etc.',
    githubUrl: 'https://aryan527.wixsite.com/finlitfrenzy/',
    languagesUsed: 'HTML, CSS, JavaScript, MATLAB',
  },
  /*Add images for the projects */
  {
    imageUrl: TradingProj,
    description: 'Trading Bot that forms and backtests a strategy on "SPY" stock and visualizes the data',
    githubUrl: 'https://github.com/taruschirag/trading-bot',
    languagesUsed: 'Python, Yahoo Finance API, Alpaca',
  },
  {
    imageUrl: Scraper,
    description: 'Scraping Data from Facebook',
    githubUrl: 'https://github.com/taruschirag/facebook-marketplace-webscraping',
    languagesUsed: 'Python, Django, SQLite',
  },
  {
    imageUrl: FoodReview,
    description: 'Ranking dishes based on google reviews. ',
    githubUrl: 'https://github.com/taruschirag/Food_Review',
    languagesUsed: 'Python',
  },
  {
    imageUrl: TennisAlliance,
    description: 'Tennis Alliance',
    githubUrl: 'https://github.com/Hack4Impact-UMD/tennis-alliance',
    languagesUsed: 'Typescript, Javascript, CSS',
  },

  {
    imageUrl: Fire,
    description: 'Recreated a reserach paper that communicates the impact of EVs on the environment. Scraped data from government websites and developed a ML model for future predictions',
    githubUrl: 'https://github.com/umdfiresa2023/fall-project-eg',
    languagesUsed: 'R',
  },
];
const Projects = () => {
  const handleProjectClick = (githubUrl) => {
    window.open(githubUrl, '_blank');
  };

  return (
    <div className='projects'>
      <div style={{ marginBottom: '10px', marginTop: '100px' }} className='content'>
        <h1>Projects!</h1>

        <div className="project-grid" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              style={{ textAlign: 'center', border: '1px solid white', padding: '10px', borderRadius: '8px', margin: '10px', cursor: 'pointer', width: '45%' }}
              onClick={() => handleProjectClick(project.githubUrl)}
            >
              <img
                src={project.imageUrl}
                alt={project.description}
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
              />
              <div style={{ marginTop: '10px', color: 'white' }}>
                <p>{project.description}</p>
                <p><span style={{ textDecoration: 'underline' }}>Languages Used:</span> {project.languagesUsed}</p>
              </div>
            </div>
          ))}
        </div>
        <h2>
          <a href="https://github.com/taruschirag" target="_blank" rel="noopener noreferrer">
            Click Here to View more fun projects
          </a>
        </h2>
      </div>
    </div>
  )
}

export default Projects

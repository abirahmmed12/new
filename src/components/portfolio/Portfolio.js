import React from "react";
import "./portfolio.css";

import event from '../../assets/Screenshot 2023-12-12 133205.png';
import brand from '../../assets/Screenshot 2023-12-12 133249.png';
import food from '../../assets/Screenshot 2023-12-12 133322.png';

const data = [
  {
    id: 1,
    image: event,
    title: "Event Managemnet",
    liveSite: "https://silly-lebkuchen-5f08e3.netlify.app/",
    githubClient: "https://github.com/abirahmmed12/event-management-client",
    technologies:"ReactJs, NodeJs, ExpressJs, MongoDB, Firebase,JWT, Tailwind CSS,Daisy Ui, React, React Hook Form.",
    timePeriod: 5,
 
  },
  {
    id: 2,
    image: brand,
    title: "Brand Shop",
    liveSite: "https://6533ddfe917348285f43f95f--creative-lebkuchen-ef12b9.netlify.app/",
    githubClient: "https://github.com/abirahmmed12/brand-shop-client",
    technologies:"ReactJs, NodeJs, ExpressJs, MongoDB, Firebase, JWT, Tailwind CSS",
    timePeriod: 3,
   
  },
  {
    id: 3,
    image: food,
    title: "Food Sharing",
    liveSite: "https://654cc01a5df64f1b65ea0206--singular-druid-b6db7d.netlify.app/",
    githubClient: "https://github.com/abirahmmed12/food-share-community",
    technologies:"ReactJs, NodeJs, ExpressJs,Firebase,JWT, , Tailwind CSS",
    timePeriod: 2,
   
  }
]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Projects</h2>

      <div className="container-main portfolio_container">
        {
          data.map(project=>   
          <article key={project.id} className="portfolio_item">
          <div className="portfolio_item-image">
            <img className="image" src={project.image} alt="" />
          </div>
          <h3>{project.title}</h3>
          <div className="portfolio_item-cta">
            <a href={project.githubClient} className="btn" target="_blank" >
              Github Client
            </a>
            <a href={project.liveSite} className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>)
        }
      </div>
    </section>
  );
};

export default Portfolio;

import React from 'react'
import {BsInfoCircleFill} from "react-icons/bs";
import PageHeaderContent from "../../Components/pageHeaderContent";
import ImageOne from "../../Images/coinxchange.jpeg";
import ImageTwo from "../../Images/CollegeLibrary.jpeg";
import ImageThree from "../../Images/MagicNotes.jpeg";
import ImageFour from "../../Images/techiestar.jpeg";
import ImageFive from "../../Images/videotube.jpeg";
import './style.scss';
import { useState } from "react";




const portfolioData = [
  {
    id: 2,
    name: "coinXchange",
    image: ImageOne,
    link: "https://coinxxchangenetlifyapp.netlify.app/",
  },
  {
    id: 3,
    name: "College Library",
    link: "",
    image: ImageTwo,
  },
  {
    id: 3,
    name: "MagicNote",
    link: "",
    image: ImageThree,
  },
  {
    id: 2,
    name: "techiestar",
    image: ImageFour,
    link: "https://techsolutionsitenetlifyapp.netlify.app/",
  },
  
  {
    id: 2,
    name: "videoTube",
    image: ImageFive,
    link: "https://videotubenetlifyapp.netlify.app",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "React js",
  },
  {
    filterId: 3,
    label: "Javascript",
  },
];

const Portfolio = () => {

  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);


  return (
    <section id="portfolio" className='portfolio'>
    <PageHeaderContent
    headerText= "My Portfolio"
    icon={<BsInfoCircleFill size={40} /> }
    />
    <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
 

 
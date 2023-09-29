import React from 'react'
import {BsInfoCircleFill} from "react-icons/bs";
import {FaDatabase} from "react-icons/fa"
import {DiReact, DiAndroid, DiApple} from "react-icons/di";
import PageHeaderContent from "../../Components/pageHeaderContent";
import { Animate } from 'react-simple-animate';
import './style.scss';
//import { FaReact } from 'react-icons/fa';

const personalDetails =[
  {
    label:"Name",
    value:"Uttam Sharma",
  },
  {
    label:"Age",
    value:"22",
  },
  {
    label:"Address",
    value:"India",
  },
  {
    label:"Email",
    value:"sharmashivam7087@gmail.com",
  },
  {
    label:"Contact No.",
    value:"+918218988177",
  },
];

const jobSummary="Hey, I am Uttam Sharma pursued my engineering degree from jaypee university of engineering and technology,guna.Currently i am looking for an  front-end developer job and talking about the languages i know C++,HTML,CSS,JAVASCRIPT and REACTJS.I have also done some projects based on these technologies."

const About = () => {
  return (
  <section id="about" className='about'>
    <PageHeaderContent
    headerText= "About Me"
    icon={<BsInfoCircleFill size={40} /> }
    />
    <div className='about_content'>
      <div className='about_content_personalWrapper'><Animate
    play
    duration={1.5}
    delay={1}
    start={{
      transform : "translateX(-900px)",
    }}
    end={{
      transform: "translateX(0px)",
    }}
    >
      <h3>Front End Developer</h3>
      <p>{jobSummary}</p>
      </Animate>

      
    <Animate
    play
    duration={1.5}
    delay={1}
    start={{
      transform : "translateX(500px)",
    }}
    end={{
      transform: "translateX(0px)",
    }}
    >
      <h3 className='personalInformationHeaderText'>
        Personal Information
      </h3>
      <ul>
        {
          personalDetails.map((item,i)=>(
            <li key={i}>
              <span className='title'>{item.label}</span>
              <span className='value'>{item.value}</span>
              </li>

          ))
          
        }
        </ul>
        </Animate>

    </div>
    

      <div className='about_content_servicesWrapper'>
      <Animate
    play
    duration={1.5}
    delay={1}
    start={{
      transform : "translateX(600px)",
    }}
    end={{
      transform: "translateX(0px)",
    }}
    >
      <div className='about_content_servicesWrapper_innerContent'>
        <div>
          <DiReact size={60} color='var(--yellow-maincolor)' />
        </div>
        <div>
        <FaDatabase size={60} color='var(--yellow-maincolor)' />
        </div>
        <div>
        <DiAndroid size={60} color='var(--yellow-maincolor)' />
        </div>
        <div>
        <DiApple size={60} color='var(--yellow-maincolor)' />
        </div>

        </div>
        </Animate>

      </div>
    
    </div>
  </section>
  )
}

export default About;
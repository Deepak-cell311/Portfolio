
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import { Link as ScrollLink, Element } from 'react-scroll';
import Card from "./Card";
import educatsy from "../assets/Screenshot_20240722_075341.png"
import musicPlayer from "../assets/music player.png"
import aboutImage from "../assets/about-img..png"
import icon2 from "../assets/icons.png"
import icon3 from "../assets/icons 3.png"

import { useState } from "react";


function Home({ image }) {
     const [profile, icons] = image
     const [url, setUrl] = useState("")
     return (
          <>
               <main>
                    <Element name="home">
                         <section className="profile-container">
                              <img className="profileImage" src={profile} alt="image" />
                              <div className="main">
                                   {/* <img className="profileImage" src="https://avatars.githubusercontent.com/u/133989782?v=4" alt="image" /> */}
                                   <div className="profile-description">
                                        <h1 className="heading">Full-Stack Mern Developer <span className="hand">👋🏻</span></h1>
                                        <small className="about">Hi, I&apos;m Desh Deepak Bajpai. A passionate Full-Stack Mern Developer based in Uttar-Pradesh, India. 📍</small>
                                        <div className="social">
                                             <Link to="https://www.linkedin.com/in/desh-deepak-bajpai-a6ba9b260" target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
                                             <Link to="https://github.com/Deepak-cell311" target="_blank"><i className="fa-brands fa-github"></i></Link>
                                        </div>
                                   </div>
                              </div>
                         </section>
                    </Element>


                    <section className="skill">
                         <h4>Tech Stack <span className="line">|</span> </h4>
                         <div className="skill-icon">
                              <img src={icons} alt="skill-icon" />
                              <img src={icon2} alt="skill-icon" />
                              <img src={icon3} alt="skill-icon" />
                              <img src={icons} alt="skill-icon" />
                         </div>
                    </section>

                    <Element name="about">
                         <section className="about-me">
                              <div>
                                   <img className="profileImage" src={aboutImage} alt="about-me" />
                              </div>
                              <div className="about-description">
                                   <h4 className="about-title" style={{ color: "rgb(40, 104, 224)", fontSize: "2rem" }}>ABOUT ME</h4>
                                   <h1>Full-Stack Mern Developer based in India 📍</h1>
                                   <p>Hey, my name is Desh Deepak Bajpai, and I'm a Full-Stack Mern Developer. My passion is to create and develop a full stack application for my users. <br /><br /> My main stack currently is React/Next.js in combination with Tailwind CSS , Javascript/TypeScript .</p>
                              </div>
                         </section>
                    </Element>


                    <Element name="projects" >
                         <section className="project" id="project-one">
                              <h1 className="project-heading" align="center">Projects</h1><br />
                              <article className="all-projects">
                                   <Card
                                        image={educatsy}
                                        name="Educatsy"
                                        website="https://educatsy.vercel.app/"
                                        paragraph="Educatsy is a powerful learning management system (LMS) web application ....."
                                        readMore = "https://github.com/Deepak-cell311/Educatsy"
                                   />
                                   <Card
                                        className="musicImage"
                                        image={musicPlayer}
                                        name="Music Player"
                                        website="https://music-player-iota-five.vercel.app/"
                                        paragraph="The Music Player Application is a modern, feature-rich platform design....."
                                        readMore = "https://github.com/Deepak-cell311/Music-Player"
                                   />
                                   
                               
                              </article>
                              
                         </section>
                    </Element>

                    <Element name="contact">
                         <section className="contact">
                              <h1>Contact</h1>
                              <p>Don't be shy! Hit me up! 👇</p>

                              <div>
                                   <article className="location" style={{display: "flex"}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-map-search"><path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path><path d="M9 4v13"></path><path d="M15 7v5"></path><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M20.2 20.2l1.8 1.8"></path></svg>
                                        <p>
                                             <h2>Location</h2>
                                             <span className="span">India</span>
                                        </p>
                                   </article>

                                   <article className="location" style={{display: "flex"}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-mail"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg>
                                        <p>
                                             <h2>Mail</h2>
                                             <span className="span">deshdeepakbajpai8@gmail.com</span>
                                        </p>
                                   </article>
                                        
                              </div>
                         </section>
                    </Element>
               </main>
          </>
     )
}

export default Home


Home.propTypes = {
     image: PropTypes.array.isRequired, // Defines image as a required string prop
};
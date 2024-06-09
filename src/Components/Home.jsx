
import { Link } from "react-router-dom"
function Home() {
     return (
          <>
               <main>
                    <section className="profile-container">
                              <img className="profileImage" src="/Portfolio/src/assets/react.svg" alt="image" />
                         <div className="main">
                              {/* <img className="profileImage" src="https://avatars.githubusercontent.com/u/133989782?v=4" alt="image" /> */}
                              <div className="profile-description">
                                   <h1 className="heading">Full-Stack Mern Developer <span className="hand">👋🏻</span></h1>
                                   <small className="about">Hi, I&apos;m Desh Deepak Bajpai. A passionate Full-Stack Mern Developer based in Uttar-Pradesh, India. 📍</small>
                                   <div className="social">
                                        <Link to="https://github.com/Deepak-cell311"><i className="fa-brands fa-github"></i></Link>
                                        <Link to="www.linkedin.com/in/desh-deepak-bajpai-a6ba9b260"><i className="fa-brands fa-linkedin"></i></Link>
                                   </div>
                              </div>
                         </div>


                    </section>
               </main>
          </>
     )
}

export default Home

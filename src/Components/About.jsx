
function About({ about }) {
  const [profile] = about
  return (
    <>
      <section className="about-me">
        <div>
          <img className="profileImage" src={profile} alt="about-me" />
          {/* <div className="animation">animation</div> */}
        </div>
        <div className="about-description">
          <h2 className="about-title" style={{ color: "blue" }}>ABOUT ME</h2>
          <h1>Full-Stack Mern Developer based in India 📍</h1>
          <p>Hey, my name is Desh Deepak Bajpai, and I'm a Full-Stack Mern Developer. My passion is to create and develop a full stack application for my users. <br /><br /> My main stack currently is React/Next.js in combination with Tailwind CSS , Javascript/TypeScript .</p>
        </div>
      </section>
    </>
  )
}

export default About

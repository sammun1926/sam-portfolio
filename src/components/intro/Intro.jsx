import "./Intro.scss"

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/paps.jpeg" alt=""/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There,I'm Sam Maina </h2>
          <h1> A <spam>Software Engineer</spam></h1>
          <h3>Based in Kenya</h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down2.png" alt=""/>
          </a>
      </div>

        
    </div>
  )
}

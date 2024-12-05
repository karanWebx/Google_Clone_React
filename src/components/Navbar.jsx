import { useState } from "react";
import "./Navbar.css";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {

  const [showCard, setShowCard] = useState(false);

  const toggleCard = () => {
    setShowCard(!showCard);
  };

  const images = [
    "/images/gsearchicon.png",
    "/images/google-maps.png",
    "/images/youtube.png",
    "/images/gmail.png",
    "/images/googlechat.png",
    "/images/google-contacts.png",
    "/images/google-calendar.png",
    "/images/google-play.png",
    "/images/translate.png",
    "/images/google-photos.png",
    "/images/googlefinance.png",
    "/images/google-wallet.png",
    "/images/slides.png",
    "/images/google-sheets.png",
    "/images/google-docs.png",
    "/images/keeps.png",
  ]

  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="#">About</a>
        <a href="#">Store</a>
      </div>
      <div className="nav-right">
        <a href="#">Gmail</a>
        <a href="#">Images</a>  
      <div className="icons">
        <TbGridDots onClick={toggleCard} />
        <a href="https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fwww.google.com%2F%3Fpli%3D1&ec=GAZAmgQ&hl=en&passive=true&ifkv=AcMMx-cS9eOM-Vb4TcWpN7vwvOLZ8QedWEisGW3cEjb67JeOFLgzQ2Q6V7Dy4xFptb9idgILEN41hg&ddm=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
        <button>Sign in</button>
        </a>
      </div>
      </div>

      {showCard && (
        <div className="card">
          <div className="card-content">
          <div className="grid-container">
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Grid ${index}`} className="grid-items" />
            ))}
          </div>
          </div>
          <button className="card-button">More from Google</button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
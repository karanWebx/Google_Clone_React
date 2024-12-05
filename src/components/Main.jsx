import './Main.css';

const Main = () => {
  return (
    <div className="main-container">
      <div className="logo-container">
        <img 
          src="/images/googlesearch.png" 
          alt="Google Logo" 
          className="google-logo" 
        />
      </div>

      <div className="search-container">
        <form className="search-form">
          <div className="input-wrapper">
            <span className="search-icon">
            <img src="/images/msearch.png"
            />
            </span>
            <input 
              type="text" 
              className="search-input"  
            />
            <span className="mic-icon">
            <img src="/images/google-voice.png"
            /> 
            </span>
            <span className="lens-icon">
            <img src="/images/google.png"
            />
            </span>
          </div>
        </form>
      </div>

      <div className="button-container">
        <button className="search-button">Google Search</button>
        <button className="lucky-button">I'm Feeling Lucky</button>
      </div>

      <div className="languages">
        <p>
          Google offered in: 
          <a href="">हिन्दी</a> 
          <a href="">বাংলা</a> 
          <a href="">తెలుగు</a> 
          <a href="">मराठी</a> 
          <a href="">தமிழ்</a> 
          <a href="">ગુજરાતી</a> 
          <a href="">ಕನ್ನಡ</a> 
          <a href="">മലയാളം</a> 
          <a href="">ਪੰਜਾਬੀ</a>
        </p>
      </div>

      {/* Gradient definition */}
      <svg xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#4285F4', stopOpacity: 1 }} />
            <stop offset="25%" style={{ stopColor: '#DB4437', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#F4B400', stopOpacity: 1 }} />
            <stop offset="75%" style={{ stopColor: '#0F9D58', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Main;

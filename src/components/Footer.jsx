import "./Footer.css";

function Footer() {
    return (
      <footer className="footer">
        <div className="footer-top">
          <p>India</p>
        </div>
        <div className="footer-bottom">
          <div className="footer-links-left">
            <a href="#">About</a>
            <a href="#">Advertising</a>
            <a href="#">Business</a>
            <a href="#">How Search Works</a>
          </div>
          <div className="footer-links-right">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Settings</a>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
import logo from "./logo.png";
import "./Bot.css";
export default function Bot() {
  return (
    <div className="Bot">
      <div className="botimg">
        <img className="logo2" src={logo} />
      </div>

      <div className="bottom">
        <div className="containers">
          <div className="coppyright">
            <span>Copyright © 2023</span>
            <a href="/" title="Le Hoang" className="lh">
              Le Hoang
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

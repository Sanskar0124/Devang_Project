import "./maingame.css";

export default function MainGame(props) {
  return (
    <div className="container">
      <img
        src={props.url}
        alt="logo"
      />

      <div className="text-container">
        <div className="games">
          <h1>{props.heading}</h1>
          <p>{props.content}</p>
        </div>
        </div>

      <div className="links">
        <a target="_blank" href={props.doomLink}>
          <img
            src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-twitch-social-media-justicon-flat-justicon.png"
            alt="twitch"
          />
        </a>
        <a target="_blank" href={props.steamLink}>
          <img
            src="https://img.icons8.com/fluency/64/000000/steam.png"
            alt="logo"
          />
        </a>
      </div>
    </div>
  );
}

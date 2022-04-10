import "./contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <h1>Join Us on </h1>
      <div className="contact-links">
        <a
          href="https://www.youtube.com/channel/UCt0t6IyAxXVvmXN1FRVu7CA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/office/30/000000/youtube-play.png"
            alt="YouTube"
          />
        </a>
        <a
          href="https://www.instagram.com/ign_in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/office/30/000000/instagram-new.png"
            alt="inst"
          />
        </a>
        <a
          href="https://twitter.com/IGN_IN"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/office/30/000000/twitter.png"
            alt="Twitter"
          />
        </a>
        <a
          href="https://www.facebook.com/IGNDIA/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/office/30/000000/facebook-new.png"
            alt="Facebook"
          />
        </a>
      </div>
    </div>
  );
}

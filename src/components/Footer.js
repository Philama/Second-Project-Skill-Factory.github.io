import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="linksFooter">
        <a href="https://github.com/Philama" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className="linksIcons" icon={faGithub} />
        </a>
        <a href="hhttps://www.linkedin.com/in/guardini-philama-4a77aa105/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className="linksIcons" icon={faLinkedin} />
        </a>
      </div>
      <div className="footerText">
        <p>Guardini Philama 2022 &copy; - SkillFactory React</p>
      </div>
    </div>
  );
};

export default Footer;

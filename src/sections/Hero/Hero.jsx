import styles from "./HeroStyles.module.css";
import me from "../../assets/me3.jpg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/John Kim Resume 2025 (Developer).pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={me}
          alt="Profile picture of John Kim"
        ></img>

        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        ></img>
      </div>
      <div className={styles.info}>
        <h1>
          John <br />
          Kim
        </h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a href="https://github.com/JohnYKim97" target="_blank">
            <img src={githubIcon} alt="Github icon"></img>
          </a>
          <a
            href="https://www.linkedin.com/in/john-kim-47a5751b7/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon"></img>
          </a>
        </span>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;

import styles from "./SkillsStyles.module.css";
import checkMarkDark from "../../assets/checkmark-dark.svg";
import checkMarkLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme, toggleTheme } = useTheme();

  const checkMarkIcon = theme === "light" ? checkMarkLight : checkMarkDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Angular"></SkillList>
        <SkillList src={checkMarkIcon} skill="HTML"></SkillList>
        <SkillList src={checkMarkIcon} skill="CSS"></SkillList>
        <SkillList src={checkMarkIcon} skill="TypeScript"></SkillList>
      </div>
      <hr></hr>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="PostgreSQL"></SkillList>
        <SkillList src={checkMarkIcon} skill="Node.js"></SkillList>
        <SkillList src={checkMarkIcon} skill=".NET Core"></SkillList>
        <SkillList src={checkMarkIcon} skill="Git"></SkillList>
      </div>
      {/* <hr></hr>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="JavaScript"></SkillList>
        <SkillList src={checkMarkIcon} skill="React"></SkillList>
      </div> */}
    </section>
  );
}

export default Skills;

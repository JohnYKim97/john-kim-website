import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import whoPokemon from "../../assets/KsHbF.jpg";
import assets from "../../assets/1907675.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={whoPokemon}
          link="https://pokemonquizwebapp.netlify.app/"
          h3="Who's That Pokémon?"
          p="Pokémon guessing game"
        ></ProjectCard>
        <ProjectCard
          src={assets}
          link="https://assets-module.netlify.app/"
          h3="Assets Module"
          p="Manages assets of a company"
        ></ProjectCard>
      </div>
    </section>
  );
}

export default Projects;

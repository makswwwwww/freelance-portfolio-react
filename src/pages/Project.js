import { useParams } from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import { projects } from "./../helpers/projectsList";

const Project = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          {/* Оборачиваем картинку в ссылку Figma */}
          <a href={project.figmaLink} target="_blank" rel="noopener noreferrer">
            <img
              src={project.imgBig}
              alt={project.title}
              className="project-details__cover"
            />
          </a>

          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>

          {project.gitHubLink && (
            <BtnGitHub link={project.gitHubLink} />
          )}
        </div>
      </div>
    </main>
  );
};

export default Project;

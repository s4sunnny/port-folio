import { Project } from "../Utils/Project";
import SocialLinks from "./SocialLinks";
import ProjectList from "../Utils/ProjectList";

function Projects() {
  const projectData = ProjectList();
  return (
    <>
      <div className="flex h-full mx-auto py-10 px-20">
        <SocialLinks />
        <div className="pl-5 flex">
          {projectData.map((obj) => {
            console.log(obj);
            return (
              <Project
                projectName={obj.name}
                image={obj.image}
                description={obj.Desc}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;

import Progressbar from "./Progressbar";
import SkillsList from "../Utils/SkillsList";

function Skills() {
  const aar = SkillsList();
  const frontEnd = aar[0].frontend.map((object, index) => {
    return (
      <Progressbar
        key={index}
        skillName={object.skillName}
        circlePercent={object.circlePercent}
        color={object.color}
        textSize={object.textSize}
      />
    );
  });

  const backEnd = aar[0].backend.map((object, index) => {
    return (
      <Progressbar
        key={index}
        skillName={object.skillName}
        circlePercent={object.circlePercent}
        color={object.color}
        textSize={object.textSize}
      />
    );
  });
  const database = aar[0].database.map((object, index) => {
    return (
      <Progressbar
        key={index}
        skillName={object.skillName}
        circlePercent={object.circlePercent}
        color={object.color}
        textSize={object.textSize}
      />
    );
  });

  return (
    <>
      {/* <div className="h-full mx-auto py-10">
        <div className="flex mx-auto text-white justify-between w-5/6 ">
          <div></div>
          {skills}
        </div>
      </div> */}
      <div className="h-full mx-auto py-10 px-20">
        <div className="block rounded-lg shadow-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-black">
          <div className="border-b-2 font-extrabold border-neutral-100 px-6 py-3 dark:border-black/10">
            What I know
          </div>
          <div className="py-4">
            <div className="text-black font-extrabold px-10 py-1">
              Frontend--
            </div>
            <div className="flex mx-auto text-white justify-start">
              {frontEnd}
            </div>
          </div>
          <div className="py-4">
            <div className="text-black font-extrabold px-10 py-1">
              Backend--
            </div>
            <div className="flex mx-auto text-white justify-start w-5/6">
              {backEnd}
            </div>
          </div>
          <div className="py-4">
            <div className="text-black font-extrabold px-10 py-1">
              Database--
            </div>
            <div className="flex mx-auto text-white justify-start w-5/6">
              {database}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;

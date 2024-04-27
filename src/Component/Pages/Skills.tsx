import SkillsLogoList from "../Utils/SkillsLogoList";

function Skills() {
  return (
    <>
      <div className="h-full mx-auto py-10 px-20">
        <div className="block py-10 rounded-lg shadow-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-black">
          <div className="border-b-2 font-extrabold border-neutral-100 px-6 py-3 dark:border-black/10">
            What I know
          </div>
          <div className="py-4">
            <div className="text-black font-extrabold px-10 py-1">
              Frontend--
            </div>
            <div className="startBar flex mx-auto text-white justify-start">
              {SkillsLogoList().frontend.map((obj, index) => {
                return (
                  <>
                    <div className="text-center px-4">
                      <img
                        className="object-fill h-20 w10"
                        key={index}
                        src={obj.image}
                      />
                      <label className="text-black">{obj.name}</label>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="py-4">
            <div className="text-black font-extrabold px-10 py-1">
              Backend--
            </div>
            <div className="startBar flex mx-auto text-white justify-start">
              {SkillsLogoList().backend.map((obj, index) => {
                return (
                  <>
                    <div className="text-center px-4">
                      <img
                        className="object-fill h-20 w10"
                        key={index}
                        src={obj.image}
                      />
                      <label className="text-black">{obj.name}</label>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="py-4">
            <div className="text-black font-extrabold px-10 py-1">
              Database--
            </div>
            <div className="startBar flex mx-auto text-white justify-start">
              {SkillsLogoList().database.map((obj, index) => {
                return (
                  <>
                    <div className="text-center px-4">
                      <img
                        className="object-fill h-20 w10"
                        key={index}
                        src={obj.image}
                      />
                      <label className="text-black">{obj.name}</label>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;

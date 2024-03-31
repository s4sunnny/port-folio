import Typewriter from "typewriter-effect";
import Experience from "./Experience";

export function IntroText() {
  return (
    <div className="text-2xl text-white py-10">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            // .typeString("")
            // .pauseFor(1000)
            // .deleteAll()
            .typeString(
              "Hey! My name is Sunny Bansidhar Pandey, and I'm a full-stack developer with " +
                Experience() +
                " years of experience in web development. I have a strong command over front-end and back-end technologies, allowing me to build complete and scalable applications."
            )
            .start();
        }}
      />
    </div>
  );
}

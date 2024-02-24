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
              "Hey! My name is Sunny Bansidhar Pandey, and I'm a full stack developer. with " +
                Experience() +
                " of experience in web development, I have a strong command over both front-end and back-end technologies, allowing me to built complete and scalable applications."
            )
            .start();
        }}
      />
    </div>
  );
}

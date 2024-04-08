import MotionDiv from "@/components/motion-div";
import Link from "next/link";

export default function about() {
  return (
    <section
      id="about"
      className="mx-auto my-16 flex flex-col items-center justify-center gap-4 px-2 scroll-mt-24 md:my-20  md:max-w-full lg:flex-row lg:items-start lg:gap-16"
    >
      <div className="order-2 lg:order-1 lg:w-2/3">
        <MotionDiv delayOffset={0.2}>
          <h2 className="mb-3 w-full text-center text-3xl font-semibold md:mb-6">
            About Me
          </h2>
        </MotionDiv>

        <article className="flex flex-col gap-4 text-lg">
          <MotionDiv delayOffset={0.4}>
            <div>
              I'm Pradhumn Gautam a Full Stack Developer from India. Passionate
              about Software Development, Cloud Engineering, Backend Systems &
              Open-Source Softwares.
            </div>
          </MotionDiv>
          <MotionDiv delayOffset={0.5}>
            <div>
              <p>
                I'm currently an undergraduate, pursuing Computer Science majors
                with Specialization in Artificial Intelligence and Machine
                Learning from New Delhi, India.
              </p>
              <br />
              <p>
                I am passionate about creating not just functional, but also
                aesthetically pleasing and intuitive user interfaces, ensuring a
                seamless user experience.
              </p>
              <br />
              
            </div>
          </MotionDiv>
        </article>
      </div>
      <div className="lg:order-2 lg:w-1/3">
        <MotionDiv delayOffset={0.4}>
          <img
            src="/photo.jpeg"
            alt="photo"
            className="w-[350px] min-w-[300px] rounded-xl transition-all hover:rotate-3 hover:scale-105"
          />
        </MotionDiv>
      </div>
    </section>
  );
}

import ContactList from "@/components/contact-list";
import MotionText from "@/components/motion-text";
import MotionDiv from "@/components/motion-div";
import Image from "next/image";
import DP from "../../public/dp.png";

export default function hero() {
  return (
    <section className="my-8 flex flex-col items-center justify-center">
      <h1 className="mb-4 text-center text-lg md:text-[2rem]">
        <MotionText delayOffset={0}>Hi, I'm Pradhumn Gautam! 👋</MotionText>
      </h1>

      <div className="overflow-hidden rounded-full p-3 md:p-4">
        <MotionDiv>
          <Image src={DP} alt="Dp" className="max-w-xs" />
        </MotionDiv>
      </div>

      <h1 className="text-center text-xl font-semibold">
        <MotionDiv delayOffset={0.8}>Software Engineer 🧑🏻‍💻</MotionDiv>
      </h1>

      <h1 className="text-center text-xl ">
        <MotionDiv delayOffset={1}>Full Stack Developer</MotionDiv>
      </h1>

      <div className="my-12 flex w-full flex-col gap-2 text-center lg:w-[50%]">
        <MotionDiv delayOffset={1.2}>
          <p className="text-lg">Welcome to my personal portfolio!</p>
        </MotionDiv>

        <MotionDiv delayOffset={1.4}>
          <p className="text-md">
            <b>Typescript </b> & <b> Python </b> guy at the morning.
            <b> Microservices </b>kid at the night.
          </p>
        </MotionDiv>
      </div>

      
    </section>
  );
}

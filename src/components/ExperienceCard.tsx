import { Experience } from "@/typings";
import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../../sanity";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 snap-center w-[500px] md:w-[600px] xl:w-[900px] p-10 bg-[#353b48] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200  overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#e84118]/80">
      <motion.img
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px]"
        src={urlFor(experience.companyImage.asset._ref).toString()}
        alt="icon"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology, i) => {
            return (
              <Image
                key={i}
                className="h-10 w-10 rounded-full"
                src={urlFor(technology.image.asset._ref).toString()}
                alt=""
                width="100"
                height="100"
              />
            );
          })}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {experience.dateStarted} -{" "}
          {experience.isCurrentlyWorkingHere ? `Current` : experience.dateEnded}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {experience.points.map((point, i) => {
            return <li key={i}>{point}</li>;
          })}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;

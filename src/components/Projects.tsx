/* eslint-disable @next/next/no-img-element */
'use client'
import { Projects } from "@/typings";
import { motion } from "framer-motion";
import { urlFor } from "../../sanity";

type Props = {
    projects: Projects[]
}

function Projects({ projects }: Props) {
    return (
        <motion.div
            className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
            initial={{ opacity:0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5}}    
        >
            <h3 className="sectionHeading">
                Projects
            </h3>

            <div className="realtive w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#e84118]/80">
                {projects?.map((project, i) => {
                    return (
                        <div key={project._id} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44">
                            <motion.img
                                src={urlFor(project.image.asset._ref).toString()}
                                alt=""
                                initial={{ y: -300, opacity: 0, }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1.2 }}
                                viewport={{ once: true }}
                            />
                            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                                <h4 className="text-4xl font-semibold text-center">
                                    <span className="underline decoration-[#e84118]/50">Case Study {i+1} of {projects.length}:</span> {project.title}
                                </h4>
                                <p className="text-lg text-center md:text-left">
                                    {project.summary}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="w-full absolute top-[30%] bg-[#e84118]/10 left-0 h-[500px] -skew-y-12" />
        </motion.div>
    )
}

export default Projects
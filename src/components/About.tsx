'use client'
import { PageInfo } from "@/typings";
import { motion } from "framer-motion";
import { urlFor } from "../../sanity";

type Props = {
    pageInfo: PageInfo
}

function About({ pageInfo }: Props) {
  return (
    <motion.div 
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
        initial={{ opacity:0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5}}
    >
        <h3 className="sectionHeading">
            About
        </h3>
        <motion.img
            src={urlFor(pageInfo.profilePic.asset._ref).toString()}
            alt=""
            initial={{ x: -200, opacity: 0, }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
        />
        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">
                Here is a <span>little</span> background
            </h4>
            <p className="text-base">
                {pageInfo.backgroundInfomation}
            </p>
        </div>
    </motion.div>
  )
}

export default About;
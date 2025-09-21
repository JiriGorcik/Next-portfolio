"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        After graduating from high school with a focus on{" "}
        <span className="font-medium">Information Technology</span>,
        specializing in{" "}
        <span className="font-medium">Graphics and Multimedia</span>, I decided
        to pursue my passion for programming. I started learning through online
        resources, such as The Odin Project, and later completed a{" "}
        <span className="font-medium">full-stack web development</span>{" "}
        bootcamp, gaining hands-on experience with both frontend and backend
        technologies. After a year of dedicated self-study, I joined Unicorn as
        a Full-Stack Developer. I enjoy programming because it lets me combine
        logic with a visual interface. There’s something satisfying about making
        things work smoothly and look orderly. My core stack includes{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        , and I am also familiar with TypeScript and Mongoose. I am always
        learning new technologies and I am currently planning to explore mobile
        development.
      </p>
    </motion.section>
  );
}

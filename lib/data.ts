import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import devFlowImg from "@/public/devFlowImg.png";
import hooBankImg from "@/public/hooBankImg.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Praha Coding School Bootcamp",
    location: "Remote",
    description:
      "A three-month bootcamp where I learned the basics of web development",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Unicorn, Plzeň",
    description:
      "I started in the service team, where I fixed bugs, wrote automation scripts, and developed frontend components. Later, I moved to the development team, where I contributed to application design, implementation, and ensured the smooth and reliable functioning of applications.",
    tech: ["React", "MongoDB", "Node.js"],
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2025",
  },
  {
    title: "Unicorn University Certificate",
    location: "Remote",
    description:
      "While working at Unicorn, I earned a certification through their University.",
    tech: ["Developer", "Designer"],
    icon: React.createElement(LuGraduationCap),
    date: "2025",
  },
  {
    title: "JsMastery Next.js Course",
    location: "Remote",
    description:
      "Completed a paid comprehensive course on Next.js, covering advanced concepts and best practices for building scalable web applications.",
    tech: ["Next", "TypeScript", "Tailwind"],
    icon: React.createElement(LuGraduationCap),
    date: "2025",
  },
] as const;

export const projectsData = [
  {
    title: "DevOverFlow",
    description:
      "A Q&A web application inspired by Stack Overflow, featuring a modern user interface and additional functionality beyond the original platform",
    tags: ["Next.js", "TypeScript", "Tailwind", "MongoDB", "Zod", "OpenAI"],
    imageUrl: devFlowImg,
    link: "https://devflow-nine.vercel.app/",
  },
  {
    title: "HooBank",
    description:
      "A modern banking application landing page built with React and Tailwind CSS, featuring a responsive layout and sleek, user-friendly design.",
    tags: ["React", "Tailwind"],
    imageUrl: hooBankImg,
    link: "https://jirigorcik.github.io/ModernBankApp/",
  },
  {
    title: "CorpComment",
    description:
      "A web application that allows users to give anonymous feedback to companies. It includes features such as posting feedback, upvoting, and filtering feedback by company.",
    tags: ["React", "TypeScript", "CSS", "Zustand"],
    imageUrl: corpcommentImg,
    link: "https://corp-comment-orcin.vercel.app/",
  },
  {
    title: "rmtDev",
    description:
      "A job board web application for remote developer positions, featuring filtering, sorting, pagination, query caching, and bookmarks.",
    tags: ["React", "TypeScript", "CSS", "TanStack"],
    imageUrl: rmtdevImg,
    link: "https://rmt-dev-alpha.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Mongoose",
  "Shadcn UI",
  "Zod",
] as const;

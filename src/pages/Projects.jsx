import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    tag: "Featured",
    title: "Movie Explorer App",
    year: "2025",
    description:
      "React-based movie app using OMDb API with search, detailed view, favorites and dark mode. Focus on clean UI, real-time suggestions and responsive layouts.",
    tech: ["React", "Tailwind CSS", "OMDb API", "Dark Mode"],
    link: "",
  },
  {
    tag: "UI / Frontend",
    title: "Fashion E-Commerce UI",
    year: "2025",
    description:
      "Modern fashion e-commerce layout with hero section, category navigation, offers table and cart logic using Context API.",
    tech: ["React", "Tailwind CSS", "Context API"],
    link: "",
  },
  {
    tag: "Productivity",
    title: "Advanced Todo App",
    year: "2024",
    description:
      "Todo app with add, edit, delete, mark as done and search features. Built to practice React hooks and clean component structure.",
    tech: ["React", "CSS", "Local State"],
    link: "",
  },
  {
    tag: "Learning Project",
    title: "Smart Learn Concept",
    year: "2024",
    description:
      "Concept of an education platform focusing on personalized learning using modern UI and simple flows. Used as a base idea for multiple frontend experiments.",
    tech: ["React", "UI/UX Thinking"],
    link: "",
  },
  {
    tag: "Performance",
    title: "React Lazy Loading Demo",
    year: "2025",
    description:
      "Lazy loading routes using React Suspense to optimize initial load time and split large components into separate chunks.",
    tech: ["React", "React Router", "Suspense"],
    link: "",
  },
  {
    tag: "State Management",
    title: "Redux Toolkit Mini Demo",
    year: "2025",
    description:
      "Small counter / feature demo to understand Redux Toolkit store, slices and dispatch flow in a real React project.",
    tech: ["React", "Redux Toolkit"],
    link: "",
  },
];

function Projects() {
  return (
    <section className="space-y-10">
      <div className="space-y-3">
        <motion.h2
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-2xl font-semibold text-slate-50 md:text-3xl"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="max-w-2xl text-sm text-slate-300 md:text-base"
        >
          A collection of frontend projects built by{" "}
          <span className="font-semibold text-slate-100">Jayram Ghoghari</span>{" "}
          using React, Tailwind CSS and modern web practices. These cover real
          use cases like movie search, e-commerce, productivity tools,
          performance optimization and state management.
        </motion.p>
      </div>

      <div className="grid gap-7 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Projects;

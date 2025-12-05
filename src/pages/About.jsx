import { motion } from "framer-motion";
import ThreeCard from "../components/ThreeCard";

function About() {
  return (
    <section className="space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <motion.h2
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-2xl font-semibold text-slate-50 md:text-3xl"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="max-w-2xl text-sm text-slate-300 md:text-base leading-relaxed"
        >
          I&apos;m{" "}
          <span className="font-semibold text-slate-100">Jayram Ghoghari</span>,
          a passionate Frontend Developer from Ahmedabad, currently pursuing
          Computer Engineering (7th Semester) at SAL Institute of Technology &
          Engineering Research under GTU. I enjoy building modern, clean, fast,
          and animated interfaces using React and Tailwind CSS. My focus is to
          create pixel-perfect UI with smooth animations and a professional,
          production-ready feel.
        </motion.p>
      </div>

      {/* Two 3D Cards Section */}
      <div className="grid gap-8 md:grid-cols-2">
        <ThreeCard subtitle="Who I Am" title="A Developer Who Loves UI">
          <p className="text-sm text-slate-100 leading-relaxed">
            I started my web development journey with HTML, CSS, and JavaScript.
            Over time, I fell in love with React for its component-based
            architecture and Tailwind CSS for its clean and rapid styling
            workflow. My strength lies in converting ideas into modern UI with
            responsive layouts, smooth motion, and interactive elements that
            feel alive.
          </p>
        </ThreeCard>

        <ThreeCard subtitle="What I Do" title="Design. Develop. Deploy.">
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>
              • Crafting responsive user interfaces with React + Tailwind.
            </li>
            <li>• Implementing Framer Motion animations & 3D-like effects.</li>
            <li>• Building projects like Movie Apps & E-commerce UI.</li>
            <li>
              • Writing clean, structured, and maintainable component code.
            </li>
            <li>• Exploring advanced concepts like Redux Toolkit & HOCs.</li>
          </ul>
        </ThreeCard>
      </div>

      {/* Learning Timeline */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="rounded-3xl border border-slate-700/70 bg-slate-950/70 px-5 py-6 md:px-8 md:py-7 shadow-[0_20px_60px_-30px_rgba(0,0,0,1)]"
      >
        <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
          My Learning Journey
        </h3>

        <div className="mt-5 space-y-7">
          <div className="flex gap-4">
            <div className="mt-1 h-7 w-7 shrink-0 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 shadow-md" />
            <div>
              <p className="text-sm font-semibold text-slate-100">
                HTML, CSS & JavaScript
              </p>
              <p className="text-xs text-slate-400">
                Started with web fundamentals – built layouts, practiced
                responsive design, and created simple interactive components.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="mt-1 h-7 w-7 shrink-0 rounded-full bg-gradient-to-br from-sky-400 to-violet-500 shadow-md" />
            <div>
              <p className="text-sm font-semibold text-slate-100">
                React & Tailwind CSS
              </p>
              <p className="text-xs text-slate-400">
                Gained confidence in building full SPA applications using
                components, routing, hooks, and Tailwind-based UI systems.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="mt-1 h-7 w-7 shrink-0 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 shadow-md" />
            <div>
              <p className="text-sm font-semibold text-slate-100">
                Projects & Practice
              </p>
              <p className="text-xs text-slate-400">
                Built Movie App (OMDb API), E-commerce Fashion UI, Todo App,
                Lazy Loading demo, Redux Toolkit demo, and many UI components to
                strengthen real-world frontend skills.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Final Card - Goals */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="rounded-3xl border border-slate-700/70 bg-slate-950/80 p-7 shadow-[0_22px_70px_-30px_rgba(0,0,0,1)]"
      >
        <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
          My Goal
        </h3>

        <p className="mt-4 max-w-3xl text-sm text-slate-200 leading-relaxed">
          My aim is to become a highly skilled Frontend Developer and work with
          top-tier companies where I can build real-world digital experiences. I
          want to specialize in UI/UX, modern frontend architecture, advanced
          React patterns, and animations that bring life to user interfaces.
        </p>
      </motion.div>
    </section>
  );
}

export default About;

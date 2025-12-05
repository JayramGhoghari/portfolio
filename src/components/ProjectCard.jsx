import { motion } from "framer-motion";

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className="group relative w-full [perspective:1100px]"
    >
      <div className="pointer-events-none absolute inset-x-10 -bottom-6 h-10 rounded-full bg-black/70 blur-2xl" />

      <div className="relative rounded-3xl border border-slate-700/80 bg-slate-950/80 p-[1px] shadow-[0_28px_80px_-35px_rgba(0,0,0,1)] transition-transform duration-500 group-hover:[transform:rotateX(10deg)_rotateY(-10deg)_translateY(-6px)]">
        <div className="relative h-full w-full rounded-[1.4rem] bg-[radial-gradient(circle_at_top,_#22d3ee_0,_transparent_55%),_radial-gradient(circle_at_bottom,_#a855f7_0,_transparent_55%)] px-5 py-5 md:px-6 md:py-6">
          <div className="pointer-events-none absolute inset-0 rounded-[1.4rem] bg-gradient-to-tr from-cyan-500/20 via-transparent to-purple-500/25 opacity-50 mix-blend-screen" />

          <div className="relative flex flex-col gap-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-cyan-200/90">
                  {project.tag}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-slate-50 md:text-xl">
                  {project.title}
                </h3>
              </div>
              <span className="rounded-full bg-slate-900/80 px-3 py-1 text-[0.7rem] text-slate-200">
                {project.year}
              </span>
            </div>

            <p className="text-sm text-slate-200/90">{project.description}</p>

            <div className="flex flex-wrap gap-2 pt-1">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-slate-900/80 px-3 py-1 text-[0.7rem] text-slate-200/90"
                >
                  {t}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex text-xs font-medium text-cyan-300 hover:text-cyan-200"
              >
                View Code / Demo ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;

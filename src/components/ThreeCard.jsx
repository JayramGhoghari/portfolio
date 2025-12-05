import { motion } from "framer-motion";

function ThreeCard({ title, subtitle, children }) {
  return (
    <div className="group relative w-full max-w-xl [perspective:1200px]">
      <motion.div
        initial={{ rotateX: 12, rotateY: -8, opacity: 0, y: 30 }}
        animate={{ rotateX: 0, rotateY: 0, opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative h-full w-full transform-gpu rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-[1px] shadow-[0_25px_80px_-30px_rgba(0,0,0,0.9)]"
      >
        <div className="relative h-full w-full rounded-[1.4rem] bg-[radial-gradient(circle_at_top,_#22d3ee_0,_transparent_45%),_radial-gradient(circle_at_bottom,_#a855f7_0,_transparent_50%)] px-6 py-6 md:px-8 md:py-7">
          {/* Glow layer */}
          <div className="pointer-events-none absolute inset-0 rounded-[1.4rem] bg-gradient-to-tr from-cyan-500/20 via-transparent to-purple-500/20 opacity-60 mix-blend-screen" />

          <div className="relative flex flex-col gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/90">
                {subtitle}
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-50 md:text-3xl">
                {title}
              </h2>
            </div>

            <div className="text-sm text-slate-200/90 md:text-base">
              {children}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Shadow 3D */}
      <div className="pointer-events-none absolute inset-x-10 -bottom-6 h-10 rounded-full bg-black/70 blur-2xl" />
    </div>
  );
}

export default ThreeCard;

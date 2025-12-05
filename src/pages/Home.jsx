import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ThreeCard from "../components/ThreeCard";
import profileImg from "../assets/profile.jpg"; // make sure this exists

function Home() {
  return (
    <section className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center">
      {/* Left: Hero */}
      <div className="space-y-8">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-200 shadow-lg shadow-cyan-500/10"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          Hi, I&apos;m <span className="font-semibold">Jayram Ghoghari</span> –
          Open to Frontend / React roles
        </motion.p>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="text-3xl font-semibold leading-tight text-slate-50 md:text-4xl lg:text-5xl"
        >
          Frontend Developer crafting{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-purple-400 bg-clip-text text-transparent">
            React & Tailwind UIs
          </span>{" "}
          with smooth 3D-style animations.
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.85, delay: 0.1 }}
          className="max-w-xl text-sm text-slate-300/90 md:text-base"
        >
          I&apos;m a frontend developer from Ahmedabad, currently studying
          Computer Engineering (7th Semester) at SAL Institute of Technology &
          Engineering Research (GTU). I focus on modern React applications,
          clean layouts, Tailwind-based styling, and animations that give a
          premium feel suitable for top product companies.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex flex-wrap items-center gap-4"
        >
          <Link
            to="/projects"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-purple-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:shadow-purple-500/30"
          >
            <span className="relative">View My Projects</span>
            <span className="relative text-lg">↗</span>
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center rounded-full border border-slate-700/80 bg-slate-900/60 px-5 py-2.5 text-sm font-medium text-slate-100 hover:border-cyan-500/60 hover:bg-slate-900/90"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>

      {/* Right: Profile + skills */}
      <div className="flex flex-col items-center gap-6 md:items-end">
        {/* Profile photo 3D style */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
          className="group relative w-48 [perspective:1000px] md:w-56"
        >
          <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-cyan-500/50 via-purple-500/40 to-fuchsia-500/50 opacity-70 blur-2xl" />
          <div className="relative rounded-[1.8rem] border border-slate-700/80 bg-slate-900/80 p-1 shadow-[0_25px_80px_-30px_rgba(0,0,0,1)] transition-transform duration-500 group-hover:[transform:rotateX(10deg)_rotateY(-8deg)_translateY(-4px)]">
            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src={profileImg}
                alt="Jayram Ghoghari"
                className="h-56 w-full object-cover md:h-64"
              />
            </div>
          </div>
        </motion.div>

        <ThreeCard
          subtitle="Currently working with"
          title="React • Tailwind • Modern Frontend"
        >
          <ul className="space-y-2 text-sm">
            <li>• React Movie App with OMDb API & dark mode.</li>
            <li>• E-commerce fashion UI using React + Tailwind CSS.</li>
            <li>• Todo App, Lazy Loading demo, and HOC concepts.</li>
            <li>• Redux Toolkit & Context API mini projects.</li>
          </ul>
        </ThreeCard>
      </div>
    </section>
  );
}

export default Home;

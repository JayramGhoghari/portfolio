import { NavLink } from "react-router-dom";

const navLinkClass =
  "relative px-4 py-2 text-sm font-medium uppercase tracking-wide transition duration-300 group";

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        {/* Logo / Name */}
        <div className="group [perspective:900px]">
          <div className="inline-flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm font-semibold tracking-tight shadow-lg shadow-purple-500/10 transition-transform duration-500 group-hover:[transform:rotateX(10deg)_rotateY(-8deg)_translateY(-3px)]">
            <div className="h-7 w-7 rounded-xl bg-gradient-to-tr from-purple-500 via-fuchsia-500 to-cyan-400 shadow-md shadow-purple-500/40" />
            <div className="flex flex-col leading-tight">
              <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                Jayram Ghoghari
              </span>
              <span className="text-[0.65rem] text-slate-400">
                Frontend Developer • React & Tailwind
              </span>
            </div>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex items-center gap-1 text-slate-200">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${navLinkClass} ${isActive ? "text-cyan-300" : "text-slate-300"}`
            }
          >
            <span>Home</span>
            <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-purple-500/0 via-cyan-500/10 to-purple-500/0 opacity-0 blur-xl transition group-hover:opacity-100" />
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${navLinkClass} ${isActive ? "text-cyan-300" : "text-slate-300"}`
            }
          >
            <span>About</span>
            <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-purple-500/0 via-fuchsia-500/10 to-purple-500/0 opacity-0 blur-xl transition group-hover:opacity-100" />
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${navLinkClass} ${isActive ? "text-cyan-300" : "text-slate-300"}`
            }
          >
            <span>Projects</span>
            <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-emerald-500/0 via-cyan-500/10 to-purple-500/0 opacity-0 blur-xl transition group-hover:opacity-100" />
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${navLinkClass} ${isActive ? "text-cyan-300" : "text-slate-300"}`
            }
          >
            <span>Contact</span>
            <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-purple-500/0 opacity-0 blur-xl transition group-hover:opacity-100" />
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

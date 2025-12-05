import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-10 md:px-6 md:py-14">
          {children}
        </div>
      </main>

      {/* Footer with name + links */}
      <footer className="border-t border-slate-800/70 bg-slate-950/80 py-4">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 text-xs text-slate-500 md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} Jayram Ghoghari – Frontend Developer
            (React & Tailwind CSS)
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:jayramghoghari@gmail.com"
              className="hover:text-cyan-300"
            >
              Email
            </a>
            <span className="text-slate-600">•</span>
            <a
              href="https://github.com/JayramGhoghari"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-300"
            >
              GitHub
            </a>
            <span className="text-slate-600">•</span>
            <a
              href="https://www.linkedin.com/in/jayram-ghoghari-22ba73310/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;

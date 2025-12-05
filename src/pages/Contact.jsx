import { motion } from "framer-motion";

function Contact() {
  return (
    <section className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-start">
      <div className="space-y-4">
        <motion.h2
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-2xl font-semibold text-slate-50 md:text-3xl"
        >
          Let&apos;s collaborate
        </motion.h2>
        <motion.p
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="max-w-xl text-sm text-slate-300 md:text-base"
        >
          Whether it&apos;s a frontend internship, junior developer role, or a
          project collaboration — I&apos;d love to connect. Drop me a message
          and I&apos;ll get back as soon as possible.
        </motion.p>

        {/* Form (front-end only) */}
        <motion.form
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 space-y-4 rounded-3xl border border-slate-700/70 bg-slate-950/80 p-5 shadow-[0_20px_60px_-30px_rgba(0,0,0,1)] md:p-7"
          onSubmit={(e) => {
            e.preventDefault();
            alert(
              "This is a demo form – please use the email, GitHub or LinkedIn on the right to contact Jayram."
            );
          }}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-300">
                Your Name
              </label>
              <input
                type="text"
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-cyan-500/0 transition focus:border-cyan-400/80 focus:ring-2 focus:ring-cyan-500/40"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-300">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-cyan-500/0 transition focus:border-cyan-400/80 focus:ring-2 focus:ring-cyan-500/40"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-300">
              Message
            </label>
            <textarea
              rows={4}
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-cyan-500/0 transition focus:border-cyan-400/80 focus:ring-2 focus:ring-cyan-500/40"
            />
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-purple-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:shadow-purple-500/40"
          >
            Send Message
          </button>
        </motion.form>
      </div>

      {/* Contact details card */}
      <motion.div
        initial={{ y: 35, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="rounded-3xl border border-slate-700/70 bg-slate-950/70 p-5 text-sm text-slate-200 shadow-[0_20px_60px_-30px_rgba(0,0,0,1)] md:p-7"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
          Quick Info
        </p>
        <div className="mt-4 space-y-3 text-sm">
          <p>✔ Frontend Developer – React & Tailwind CSS</p>
          <p>✔ Comfortable with SPA, routing, and modern UI patterns.</p>
          <p>✔ Open to internships / fresher roles in frontend.</p>
        </div>

        <div className="mt-5 space-y-2 text-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Preferred Contact
          </p>

          <p>
            Email:{" "}
            <a
              href="mailto:jayramghoghari@gmail.com"
              className="text-cyan-300 hover:text-cyan-200"
            >
              jayramghoghari@gmail.com
            </a>
          </p>

          <p>
            GitHub:{" "}
            <a
              href="https://github.com/JayramGhoghari"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-300 hover:text-cyan-200"
            >
              github.com/JayramGhoghari
            </a>
          </p>

          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/jayram-ghoghari-22ba73310/"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-300 hover:text-cyan-200"
            >
              linkedin.com/in/jayram-ghoghari-22ba73310
            </a>
          </p>
        </div>

        <p className="mt-5 text-xs text-slate-400">
          You can reach out directly to{" "}
          <span className="font-semibold text-slate-200">Jayram Ghoghari</span>{" "}
          for opportunities, collaboration or project discussions.
        </p>
      </motion.div>
    </section>
  );
}

export default Contact;

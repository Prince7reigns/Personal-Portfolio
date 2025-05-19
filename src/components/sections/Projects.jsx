import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-[#8fe548] bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Money-Manager </h3>
              <p className="text-gray-400 mb-4">
                Personal finance tracker with real-time insights and automated budgeting.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Shadcn", "React Redux", "Appwrite"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://money-manager-three-eosin.vercel.app/"
                  className="text-blue-500  hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2"> Hirrd </h3>
              <p className="text-gray-400 mb-4">
                AI-powered job portal with resume generation and interview preparation(college final year group Project)
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "JavaScript", "Gemini", "Shadcn"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-green-500  py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://workly-ruby.vercel.app/"
                  className="text-blue-400  hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Youtube twitter</h3>
              <p className="text-gray-400 mb-4">
                Backend-only system with real-time interaction and scalable data management.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Node.js", "MongoDB", "Express.js", "Cloudinary "].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-green-500 0 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Prince7reigns/backend-Project"
                  className="text-blue-400  hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Blog App</h3>
              <p className="text-gray-400 mb-4">
                User-friendly blog platform with posts, comments, and content
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["javaScript", "Appwrite", "React", "Shadcn"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-green-500  py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://appwrite-blog-flame.vercel.app"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
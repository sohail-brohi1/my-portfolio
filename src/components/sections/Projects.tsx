"use client";

import { motion } from "framer-motion";
import { projects } from "@/data";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Web App", "Mobile App", "3D Web", "Portfolio"];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-32 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <span className="text-accent font-mono tracking-[0.4em] block mb-4 uppercase">
            Featured Work
          </span>
          <h2 className="text-5xl md:text-7xl font-black mb-12">
            PROJECTS<span className="text-accent">.</span>
          </h2>

          <div className="flex flex-wrap gap-4 mb-20 pointer-events-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 ${
                  filter === cat
                    ? "bg-accent text-background scale-110"
                    : "bg-white/5 border border-white/10 hover:bg-white/10"
                } relative z-20`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-2 rounded-[2.5rem] flex flex-col items-center justify-between group transition-all duration-300 border-white/5 hover:border-accent/40 overflow-hidden relative"
            >
              <div className="w-full h-[250px] relative overflow-hidden rounded-4xl mb-8">
                <div className="absolute inset-0 bg-linear-to-t from-background via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-full h-full bg-white/5 flex items-center justify-center text-accent/20 font-black text-6xl">
                  P{project.id}
                </div>
              </div>

              <div className="p-8 w-full">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase font-bold tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:neon-glow transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-10 leading-relaxed font-medium">
                  {project.description}
                </p>

                <div className="flex justify-between items-center mt-auto border-t border-white/10 pt-8">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors duration-300"
                  >
                    <Github size={18} /> GITHUB
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors duration-300"
                  >
                    LIVE SITE <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "BLA AI Chatbot System",
    org: "Barbados Licensing Authority",
    role: "Data Engineer | Fellowship Project",
    description:
      "Architected the end-to-end RAG ingestion pipeline — PDF-to-markdown conversion, semantic chunking, and metadata-enriched JSON payloads stored in a Qdrant vector database. Implemented hybrid search combining dense vector retrieval (all-MiniLM-L6-v2 embeddings) and sparse BM25 keyword search in a 70/30 weighted blend — resolving a critical bug that lifted proof-of-concept success rate from 0% to 100%. Built AWS Lambda ingestion functions for document processing and automated archival.",
    tags: ["Python", "Qdrant", "AWS Lambda", "RAG", "Hybrid Search", "NLP"],
    highlight: true,
  },
  {
    title: "DataSnap",
    org: null,
    role: null,
    description:
      "AI-powered data cleaning and ETL platform built with Flask, featuring real-time processing via Socket.IO and scalable pipelines applicable to operational and energy datasets.",
    tags: ["Flask", "Socket.IO", "ETL", "Anomaly Detection"],
    highlight: false,
  },
  {
    title: "AlphaClassBot",
    org: null,
    role: null,
    description:
      "AI scheduling assistant built with Streamlit, featuring automated reminders, authentication, and intelligent task management logic.",
    tags: ["Streamlit", "Chatbot", "Automation"],
    highlight: false,
  },
  {
    title: "AI Data Cleaning Assistant",
    org: null,
    role: null,
    description:
      "Python-based tool for automated data profiling, outlier detection, and compliance validation with automated quality reporting.",
    tags: ["Python", "Data Quality", "Governance"],
    highlight: false,
  },
];

export function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-background relative" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary text-sm font-mono tracking-widest uppercase mb-2">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">More Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group rounded-xl border bg-card p-6 flex flex-col gap-4 hover:border-primary/30 transition-all duration-300 ${
                project.highlight ? "border-primary/25" : "border-white/6"
              }`}
              data-testid={`card-project-${i}`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.org && (
                      <p className="text-xs text-muted-foreground mt-0.5">{project.org}</p>
                    )}
                  </div>
                  <a
                    href="https://github.com/drewai25"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub for ${project.title}`}
                    className="text-muted-foreground hover:text-white transition-colors opacity-0 group-hover:opacity-100 mt-1 shrink-0"
                  >
                    <Github size={16} />
                  </a>
                </div>
                {project.role && (
                  <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-secondary/10 border border-secondary/20 text-secondary mb-3">
                    {project.role}
                  </span>
                )}
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full text-xs border border-primary/15 bg-primary/8 text-primary/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Database, Activity, Layers, Server } from "lucide-react";

const metrics = [
  { label: "Hourly Climate Records", value: "87,500+", icon: Database },
  { label: "Coordinated AI Agents", value: "5", icon: Layers },
  { label: "Caribbean Nations Mapped", value: "15", icon: Activity },
  { label: "Automated Tests Passing", value: "27", icon: Server },
];

const techStack = [
  "Python", "Multi-Agent Architecture", "LLM Grid Copilot (Gemini)", "TensorFlow", "Statsmodels", "Pandas", "Streamlit", "ERA5/Copernicus API"
];

export function FeaturedProject() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="featured" className="py-24 bg-card/30 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute -top-40 -right-40 w-[600px] h-[600px] text-primary/4"
          viewBox="0 0 600 600"
          fill="none"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <circle key={i} cx="300" cy="300" r={40 + i * 22} stroke="currentColor" strokeWidth="1" />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary text-sm font-mono tracking-widest uppercase mb-2">Featured Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Flagship Project</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-2xl border border-primary/20 bg-gradient-to-br from-card to-background overflow-hidden"
          data-testid="card-featured-project"
        >
          <div className="h-2 bg-gradient-to-r from-primary via-primary/60 to-secondary" />

          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-mono">
                    Open Source
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono">
                    FutureCaribbean Agentic AI Buildathon — Track 05
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">CaribbeanGridAI</h3>
                <p className="text-primary font-medium text-lg">
                  Agentic AI platform for energy coordination across Caribbean SIDS
                </p>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://github.com/drewai25/CaribbeanGridAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-github-caribbeangridai"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-sm text-muted-foreground hover:text-white hover:border-white/30 transition-all"
                >
                  <Github size={15} />
                  GitHub
                </a>
                <span
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-xs text-muted-foreground border border-white/5"
                >
                  <ExternalLink size={13} />
                  Demo Coming Soon
                </span>
              </div>
            </div>

            <p className="text-foreground/75 leading-relaxed text-base mb-8 max-w-3xl">
              An open-source, agentic AI platform where five coordinated agents — demand forecasting, solar, wind, and
              battery dispatch under a central orchestrator — model national energy scenarios on ten years of ERA5
              climate reanalysis data. An LLM-powered Grid Copilot answers grid questions under a strict grounding
              contract: the LLM explains, deterministic models calculate. The 2030 Barbados scenario was calibrated to
              real national reference data and independently arrived at the same renewable capacity mix the country
              actually procured — validating the model against a real-world policy decision.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {metrics.map(({ label, value, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="p-4 rounded-xl border border-secondary/15 bg-secondary/5"
                  data-testid={`stat-metric-${i}`}
                >
                  <Icon size={18} className="text-secondary mb-2" />
                  <div className="text-2xl font-bold text-secondary mb-1">{value}</div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-medium border border-primary/20 bg-primary/10 text-primary"
                  data-testid={`tag-tech-${tech}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

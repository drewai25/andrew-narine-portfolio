import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Cpu, Zap, Globe, Brain, Shield } from "lucide-react";
import drewPhoto from "../../assets/drew_photo.png";

const highlights = [
  { label: "AI Governance", icon: Shield },
  { label: "Energy Transition", icon: Zap },
  { label: "Caribbean SIDS Specialist", icon: Globe },
  { label: "MLOps", icon: Cpu },
  { label: "RAG Systems", icon: Brain },
];

const floatingStats = [
  { value: "3+", label: "Years Building AI", corner: "top-right" },
  { value: "100%", label: "POC Success Rate", corner: "bottom-left" },
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary text-sm font-mono tracking-widest uppercase mb-2">About</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Who I Am</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="relative w-64 h-64 mx-auto md:mx-0" data-testid="img-avatar">

              {/* Outer animated glow ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-3xl"
                style={{
                  background: "conic-gradient(from 0deg, #1A7A8A, #C9A84C, #1A7A8A44, #1A7A8A)",
                  padding: "2px",
                  borderRadius: "1.25rem",
                }}
              >
                <div className="w-full h-full rounded-3xl bg-background" />
              </motion.div>

              {/* Static teal border frame */}
              <div className="absolute -inset-1.5 rounded-2xl border border-primary/40" />

              {/* Glow blobs behind the photo */}
              <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />
              <div className="absolute -inset-2 -bottom-6 rounded-3xl bg-secondary/8 blur-xl" />

              {/* The photo itself */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/50 shadow-2xl shadow-primary/20">
                <img
                  src={drewPhoto}
                  alt="Andrew Narine"
                  className="w-full h-full object-cover object-center"
                  style={{ filter: "brightness(1.4) contrast(1.1) saturate(1.1)" }}
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background/60 to-transparent" />
              </div>

              {/* Floating stat — top right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 10 }}
                animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -top-4 -right-8 bg-card border border-primary/30 rounded-xl px-3 py-2 shadow-lg shadow-primary/10 backdrop-blur-sm"
              >
                <p className="text-lg font-bold text-primary leading-none">3+</p>
                <p className="text-[10px] text-muted-foreground mt-0.5 whitespace-nowrap">Years Building AI</p>
              </motion.div>

              {/* Floating stat — bottom left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -10 }}
                animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.65 }}
                className="absolute -bottom-4 -left-8 bg-card border border-secondary/30 rounded-xl px-3 py-2 shadow-lg shadow-secondary/10 backdrop-blur-sm"
              >
                <p className="text-lg font-bold text-secondary leading-none">100%</p>
                <p className="text-[10px] text-muted-foreground mt-0.5 whitespace-nowrap">POC Success Rate</p>
              </motion.div>

              {/* Corner accent dots */}
              <div className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-primary" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-secondary" />
            </div>

            <div className="flex items-center gap-2 mt-10 text-muted-foreground text-sm justify-center md:justify-start">
              <MapPin size={14} className="text-secondary" />
              <span>Barbados</span>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-foreground/80 leading-relaxed text-base mb-6">
              Data and AI engineer specializing in energy transition analytics for Small Island Developing States.
              I design and build end-to-end data pipelines, machine learning models, and retrieval-augmented AI systems
              that turn complex datasets into decision-ready insights.
            </p>
            <p className="text-foreground/80 leading-relaxed text-base mb-8">
              My current focus is electricity demand forecasting, renewable energy integration, and smart grid
              applications — combining time-series modelling, MLOps, and cloud infrastructure to help utilities
              and policymakers plan a cleaner, more resilient grid.
            </p>

            <div className="flex flex-wrap gap-2">
              {highlights.map(({ label, icon: Icon }, i) => (
                <motion.span
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-medium"
                  data-testid={`badge-highlight-${i}`}
                >
                  <Icon size={11} />
                  {label}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

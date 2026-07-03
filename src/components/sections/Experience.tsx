import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Code2 } from "lucide-react";

const experiences = [
  {
    role: "Independent AI Developer",
    company: "Self-Employed",
    period: "2023 – Present",
    type: "current",
    Icon: Code2,
    description:
      "Design and build production AI systems, RAG pipelines, and ML models for real-world government and energy applications. Projects include electricity demand forecasting systems, document intelligence pipelines, and AI governance frameworks for Caribbean institutions.",
    highlights: ["CaribbeanGridAI", "BLA AI Chatbot System", "RAG Pipelines", "ML Operations"],
  },
  {
    role: "AI & Data Analyst, GRC Project Lead",
    company: "Protexxa / CynatGlobal",
    period: "Jan 2024 – Aug 2024",
    type: "past",
    Icon: Briefcase,
    description:
      "Led AI governance and compliance initiatives, designed frameworks aligned with GDPR, BDPA, and NIST AI RMF standards. Managed a 15-member team across cross-functional AI compliance projects, bridging technical AI development with regulatory requirements.",
    highlights: ["GDPR Compliance", "NIST AI RMF", "BDPA", "15-person team"],
  },
];

export function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-card/20" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary text-sm font-mono tracking-widest uppercase mb-2">Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => {
              const Icon = exp.Icon;
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                  data-testid={`card-experience-${i}`}
                >
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full border-2 border-primary bg-background mt-1.5 z-10" />

                  <div className={`md:w-1/2 pl-14 md:pl-0 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <span className="text-xs text-secondary font-mono">{exp.period}</span>
                  </div>

                  <div className={`md:w-1/2 pl-14 md:pl-0 ${isLeft ? "md:pl-12" : "md:pr-12"}`}>
                    <div className="p-6 rounded-xl border border-white/6 bg-card hover:border-primary/25 transition-colors">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                          <Icon size={16} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-white">{exp.role}</h3>
                          <p className="text-sm text-primary">{exp.company}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((h) => (
                          <span
                            key={h}
                            className="px-2.5 py-1 text-xs rounded-full border border-white/8 bg-white/4 text-muted-foreground"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cloud, Zap, Brain, BarChart } from "lucide-react";

const categories = [
  {
    label: "Programming & Tools",
    icon: Code2,
    color: "primary",
    skills: ["Python", "SQL", "R", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch"],
  },
  {
    label: "Platforms & Cloud",
    icon: Cloud,
    color: "primary",
    skills: ["AWS Lambda", "Google Cloud", "Azure", "MongoDB Atlas", "Qdrant", "Hugging Face", "GitHub"],
  },
  {
    label: "Energy & Climate Data",
    icon: Zap,
    color: "secondary",
    skills: ["ERA5/Copernicus API", "SARIMA", "LSTM", "Prophet", "Solar generation modeling", "Smart grid fundamentals", "Renewable integration analysis"],
  },
  {
    label: "AI/ML Specializations",
    icon: Brain,
    color: "secondary",
    skills: ["RAG Systems", "Hybrid Search", "Vector Databases", "MLflow", "Feature Engineering", "AI Governance"],
  },
  {
    label: "Analytics & Communication",
    icon: BarChart,
    color: "primary",
    skills: ["Power BI", "Excel", "Data Visualization", "Stakeholder Communication"],
  },
];

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-card/20 relative" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary text-sm font-mono tracking-widest uppercase mb-2">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Skills &amp; Tools</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {categories.map((cat, ci) => {
            const Icon = cat.icon;
            const isSecondary = cat.color === "secondary";
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: ci * 0.1 }}
                className="p-6 rounded-xl border border-white/6 bg-card hover:border-primary/25 transition-all duration-300"
                data-testid={`card-skill-category-${ci}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${isSecondary ? "bg-secondary/15" : "bg-primary/15"}`}>
                    <Icon size={17} className={isSecondary ? "text-secondary" : "text-primary"} />
                  </div>
                  <h3 className="text-sm font-semibold text-white">{cat.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: ci * 0.1 + si * 0.04 }}
                      className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                        isSecondary
                          ? "border-secondary/20 bg-secondary/8 text-secondary/90"
                          : "border-primary/20 bg-primary/8 text-primary/90"
                      }`}
                      data-testid={`tag-skill-${skill.replace(/\s+/g, "-")}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

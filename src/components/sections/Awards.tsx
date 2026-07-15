import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Star, Code2 } from "lucide-react";

const awards = [
  {
    title: "Barbados AI Fraud Detection Hackathon",
    subtitle: "Top Competitor",
    Icon: Trophy,
    color: "secondary",
  },
  {
    title: "Protexxa Code of Conduct Leadership Award",
    subtitle: "Leadership Recognition",
    Icon: Star,
    color: "primary",
  },
  {
    title: "FutureCaribbean Global Agentic AI Buildathon",
    subtitle: "Track 05: Energy, Climate & Resilience — CaribbeanGridAI",
    Icon: Code2,
    color: "primary",
  },
];

export function Awards() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="awards" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary text-sm font-mono tracking-widest uppercase mb-2">Recognition</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Awards &amp; Achievements</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {awards.map((award, i) => {
            const Icon = award.Icon;
            const isSecondary = award.color === "secondary";
            return (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="p-6 rounded-xl border border-white/6 bg-card hover:border-secondary/30 transition-all group"
                data-testid={`card-award-${i}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${isSecondary ? "bg-secondary/15" : "bg-primary/15"}`}>
                  <Icon size={22} className={isSecondary ? "text-secondary" : "text-primary"} />
                </div>
                <h3 className="text-base font-bold text-white mb-1 group-hover:text-secondary transition-colors">
                  {award.title}
                </h3>
                <p className="text-sm text-muted-foreground">{award.subtitle}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

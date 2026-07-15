import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Cloud, Brain, Building2, Globe, Monitor, Shield } from "lucide-react";

const certs = [
  {
    institution: "University of Pennsylvania",
    platform: "Coursera",
    title: "Regulatory Compliance Specialization",
    Icon: Building2,
    iconColor: "#2A73CC",
    href: "https://coursera.org/verify/specialization/MAYKKXFPSJH0",
  },
  {
    institution: "IBM",
    platform: "Coursera",
    title: "Introduction to Artificial Intelligence (with Honours)",
    Icon: Monitor,
    iconColor: "#006699",
    href: "https://coursera.org/verify/PK7KNNCN4J56",
  },
  {
    institution: "Google Cloud",
    platform: "Coursera",
    title: "Introduction to Generative AI",
    Icon: Cloud,
    iconColor: "#4285F4",
    href: "https://coursera.org/verify/KWBQCWQJQ5H5",
  },
  {
    institution: "Google Cloud",
    platform: "Coursera",
    title: "Introduction to Vertex AI Studio",
    Icon: Cloud,
    iconColor: "#34A853",
    href: "https://coursera.org/verify/9B8RD37KPFLK",
  },
  {
    institution: "DeepLearning.AI",
    platform: "Coursera",
    title: "Generative AI for Everyone",
    Icon: Brain,
    iconColor: "#ff6f00",
    href: "https://coursera.org/verify/M7TM23UPMBWM",
  },
  {
    institution: "Toronto Metropolitan University",
    platform: "TMU Chang School",
    title: "AI for Data Analysis",
    Icon: GraduationCap,
    iconColor: "#005A8B",
    href: "https://linkedin.com/in/andrew-narine246",
  },
  {
    institution: "University of Pennsylvania",
    platform: "Coursera",
    title: "Anti-Corruption and Compliance",
    Icon: Building2,
    iconColor: "#2A73CC",
    href: "https://coursera.org/verify/QMF2EKFFFAFM",
  },
  {
    institution: "Coursera Instructor Network",
    platform: "Coursera",
    title: "Business Ethics Foundation",
    Icon: Shield,
    iconColor: "#C9A84C",
    href: "https://coursera.org/verify/I1QS436D6WHT",
  },
  {
    institution: "Coursera Instructor Network",
    platform: "Coursera",
    title: "Introduction to Data Protection & Privacy",
    Icon: Shield,
    iconColor: "#1A7A8A",
    href: "https://coursera.org/verify/3T42TLXZQVYL",
  },
  {
    institution: "Board Infinity",
    platform: "Coursera",
    title: "Dive Deep into Python",
    Icon: Monitor,
    iconColor: "#6B3FA0",
    href: "https://coursera.org/verify/IVUBGGQNHFI8",
  },
  {
    institution: "Cyber Nations Foundation",
    platform: "CNF",
    title: "AI Analyst Certification",
    Icon: Shield,
    iconColor: "#1A7A8A",
    href: "https://linkedin.com/in/andrew-narine246",
  },
];

export function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary text-sm font-mono tracking-widest uppercase mb-2">Credentials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Certifications</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {certs.map((cert, i) => {
            const Icon = cert.Icon;
            return (
              <motion.a
                key={cert.title}
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group p-5 rounded-xl border border-white/6 bg-card hover:border-primary/30 hover:bg-card/80 transition-all duration-300 flex flex-col gap-3"
                data-testid={`card-cert-${i}`}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:opacity-90 transition-all"
                  style={{ backgroundColor: cert.iconColor + "22" }}
                >
                  <Icon size={20} style={{ color: cert.iconColor }} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">{cert.institution}</p>
                  <p className="text-sm font-medium text-white leading-snug">{cert.title}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

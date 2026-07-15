import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle, Phone, MessageCircle } from "lucide-react";

const socialLinks = [
  { Icon: Mail, label: "Email", href: "mailto:princenarine13@gmail.com", display: "princenarine13@gmail.com" },
  { Icon: Phone, label: "Phone", href: "tel:+12462608590", display: "+1 (246) 260-8590" },
  { Icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/12462608590", display: "Chat on WhatsApp" },
  { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/andrew-narine246", display: "linkedin.com/in/andrew-narine246" },
  { Icon: Github, label: "GitHub", href: "https://github.com/drewai25", display: "github.com/drewai25" },
];

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // Optional: create a free form at https://formspree.io and paste the ID below
  // (e.g. "xkgwqyzr"). Until then, the form opens a pre-filled email instead —
  // guaranteed delivery, no backend required.
  const FORMSPREE_ID = "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (FORMSPREE_ID) {
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(form),
        });
        if (res.ok) {
          setSubmitted(true);
          return;
        }
      } catch {
        // fall through to mailto
      }
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:princenarine13@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-card/20 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-primary text-sm font-mono tracking-widest uppercase mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Whether you're building the next generation of energy infrastructure or solving complex AI challenges,
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {socialLinks.map(({ Icon, label, href, display }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-4 group"
                data-testid={`link-contact-${label.toLowerCase()}`}
              >
                <div className="w-11 h-11 rounded-xl border border-white/8 bg-card flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/10 transition-all">
                  <Icon size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="text-sm text-white group-hover:text-primary transition-colors">{display}</p>
                </div>
              </a>
            ))}

            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl border border-white/8 bg-card flex items-center justify-center">
                <MapPin size={18} className="text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm text-white">Barbados</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 p-8 rounded-xl border border-primary/20 bg-primary/5">
                <CheckCircle size={40} className="text-primary" />
                <h3 className="text-lg font-semibold text-white">Thanks for reaching out!</h3>
                <p className="text-muted-foreground text-sm text-center">
                  Your email draft is ready — just hit send in your mail app, and I'll get back to you soon.
                  You can also email me directly at princenarine13@gmail.com.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs text-muted-foreground mb-1.5 font-medium" htmlFor="contact-name">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    data-testid="input-contact-name"
                    className="w-full px-4 py-3 rounded-lg border border-white/8 bg-card text-white text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-card/80 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground mb-1.5 font-medium" htmlFor="contact-email">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    data-testid="input-contact-email"
                    className="w-full px-4 py-3 rounded-lg border border-white/8 bg-card text-white text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-card/80 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground mb-1.5 font-medium" htmlFor="contact-message">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    data-testid="textarea-contact-message"
                    className="w-full px-4 py-3 rounded-lg border border-white/8 bg-card text-white text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-card/80 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  data-testid="button-contact-submit"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg bg-primary text-white font-semibold text-sm hover:bg-primary/80 transition-all shadow-lg shadow-primary/20"
                >
                  <Send size={15} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

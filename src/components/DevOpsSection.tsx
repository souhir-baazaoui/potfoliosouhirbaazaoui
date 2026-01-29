import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Container, GitBranch, Cloud, Activity } from "lucide-react";

const devopsSkills = [
  {
    icon: Container,
    title: "Conteneurisation & Orchestration",
    skills: ["Docker", "Docker Compose", "Kubernetes (notions)"],
  },
  {
    icon: GitBranch,
    title: "CI/CD & Automatisation",
    skills: ["Git / GitHub Actions", "Jenkins (notions)", "Automatisation des scripts Shell"],
  },
  {
    icon: Cloud,
    title: "Systèmes & Cloud",
    skills: ["Linux (Ubuntu, Debian)", "Serveurs web Nginx / Apache", "Cloud : AWS / notions Azure"],
  },
  {
    icon: Activity,
    title: "Monitoring & Bonnes pratiques",
    skills: ["Surveillance des serveurs (top, htop, logs)", "Pratiques GitFlow & gestion de version", "Infrastructure as Code (notions)"],
  },
];

const DevOpsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="devops" className="py-24 px-6 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-center mb-4 glow-text"
        >
          Compétences DevOps
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 font-body"
        >
          Compétences dans l'automatisation, le déploiement et la gestion
          d'infrastructures. Maîtrise des pratiques CI/CD et des outils DevOps
          modernes.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {devopsSkills.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass rounded-2xl p-8 glow-box float-animation"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 + skillIndex * 0.05 }}
                    className="flex items-center gap-3 text-muted-foreground font-body"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevOpsSection;

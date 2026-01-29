import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Database, Boxes } from "lucide-react";

const skills = [
  { icon: Code2, label: "Development" },
  { icon: Server, label: "DevOps" },
  { icon: Database, label: "Databases" },
  { icon: Boxes, label: "Containers" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text"
        >
          À propos
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-2xl p-8 md:p-12 glow-box"
        >
          <p className="text-lg text-muted-foreground leading-relaxed text-center font-body">
            Ingénieure en génie logiciel orientée DevOps et systèmes, maîtrisant
            le développement d'applications. Compétences en conception,
            développement et déploiement d'applications, administration Linux et
            conteneurisation avec Docker. Intérêt particulier pour
            l'automatisation, l'intégration continue et les bonnes pratiques
            DevOps.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <skill.icon className="w-8 h-8 text-primary" />
                <span className="text-sm font-medium">{skill.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

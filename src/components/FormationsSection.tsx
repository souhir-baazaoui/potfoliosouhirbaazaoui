import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const formations = [
  {
    year: "2019-2022",
    diploma: "Licence Sciences Informatique : Génie Logiciel",
    institution: "ISIMA, Mahdia",
  },
  {
    year: "2023-2026",
    diploma: "Ingénierie en Informatique : Génie Logiciel",
    institution: "iTeam University",
  },
];

const FormationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="formations" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text"
        >
          Formations
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-center mb-12 font-body"
        >
          Mon parcours académique
        </motion.p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" />

          {formations.map((formation, index) => (
            <motion.div
              key={formation.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 glow-box animate-glow-pulse" />

              {/* Card */}
              <div
                className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="glass rounded-2xl p-6 glow-box hover:scale-105 transition-transform">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="font-bold">{formation.year}</span>
                  </div>
                  <div className="flex items-start gap-2 mb-3">
                    <GraduationCap className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <h3 className="font-bold">{formation.diploma}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground font-body">
                    <MapPin className="w-4 h-4" />
                    <span>{formation.institution}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormationsSection;

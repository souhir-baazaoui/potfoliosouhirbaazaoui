import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Smartphone, LayoutDashboard } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "React, Next.js, Tailwind CSS",
    details: "Applications web modernes et performantes avec les dernières technologies.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "React Native, Android, iOS",
    details: "Applications mobiles cross-platform avec une expérience utilisateur fluide.",
  },
  {
    icon: LayoutDashboard,
    title: "SaaS Solutions",
    description: "Portail multi-profils, dashboards, authentification",
    details: "Solutions logicielles complètes avec gestion des utilisateurs et analytics.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text"
        >
          Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-center mb-12 font-body"
        >
          Des solutions sur mesure pour vos besoins numériques
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass rounded-2xl p-8 glow-box float-animation group cursor-pointer"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-primary font-medium text-sm mb-3">
                {service.description}
              </p>
              <p className="text-muted-foreground text-sm font-body">
                {service.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

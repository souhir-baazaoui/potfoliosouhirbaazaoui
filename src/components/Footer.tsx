import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold gradient-text mb-2">
              Souhir Baazaoui
            </h3>
            <p className="text-muted-foreground text-sm font-body">
              © 2025 Tous droits réservés
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:souhir_baazaoui@outlook.com"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <a
            href="mailto:souhir_baazaoui@outlook.com"
            className="px-6 py-2 rounded-full glass border border-primary/30 hover:border-primary/60 text-sm font-medium transition-colors"
          >
            Envoyer un email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-foreground/10 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-foreground/60">
          © {new Date().getFullYear()}{" "}
          <span className="text-foreground font-medium">Vikash</span>. All
          rights reserved.
        </p>

        <div className="mt-4 flex justify-center items-center gap-6 text-foreground/70">
          <a
            href="https://github.com/thevikashrajput"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors flex items-center gap-2"
          >
            <Github className="h-5 w-5" />{" "}
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/thevikashrajput"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors flex items-center gap-2"
          >
            <Linkedin className="h-5 w-5" />{" "}
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href="mailto:thevikashrajput@hotmail.com"
            className="hover:text-accent transition-colors flex items-center gap-2"
          >
            <Mail className="h-5 w-5" />{" "}
            <span className="hidden sm:inline">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

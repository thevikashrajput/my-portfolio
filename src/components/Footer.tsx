import { Github, Linkedin, Mail, Instagram } from "lucide-react";

// Define the XLogoIcon component directly within the same file or import if it's separate
// This is the SVG for the "X" platform logo
const XLogoIcon = ({ className = "" }: { className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-5 h-5 ${className}`} // Control size via className, Tailwind's w-5 h-5 is a good default
    fill="currentColor" // This will make the SVG inherit the current text color
  >
    <title>X</title>
    {/* Path data for the X logo - ensure this is the correct/desired version */}
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="py-10 border-t border-foreground/10 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-foreground/60">
          © {new Date().getFullYear()}{" "}
          <span className="text-foreground font-medium">Vikash</span>. All
          rights reserved.
        </p>

        <div className="mt-4 flex justify-center items-center gap-5 sm:gap-6 text-foreground/70 flex-wrap">
          {/* GitHub Link */}
          <a
            href="https://github.com/thevikashrajput"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors flex items-center gap-2"
            aria-label="Vikash's GitHub Profile"
          >
            <Github className="h-5 w-5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          {/* LinkedIn Link */}
          <a
            href="https://linkedin.com/in/thevikashrajput"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors flex items-center gap-2"
            aria-label="Vikash's LinkedIn Profile"
          >
            <Linkedin className="h-5 w-5" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          {/* Instagram Link */}
          <a
            href="https://instagram.com/thevikashrajput_" // Replace with your Instagram username
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors flex items-center gap-2"
            aria-label="Vikash's Instagram Profile"
          >
            <Instagram className="h-5 w-5" />
            <span className="hidden sm:inline">Instagram</span>
          </a>

          {/* X (formerly Twitter) Link with SVG Icon */}
          <a
            href="https://x.com/thevikashrajput" // Replace with your X username
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors flex items-center gap-2"
            aria-label="Vikash's X Profile"
          >
            <XLogoIcon /> {/* Using the custom SVG component */}
            <span className="hidden sm:inline">X (formerly Twitter)</span>
          </a>

          {/* Email Link */}
          <a
            href="mailto:thevikashrajput@hotmail.com"
            className="hover:text-accent transition-colors flex items-center gap-2"
            aria-label="Email Vikash"
          >
            <Mail className="h-5 w-5" />
            <span className="hidden sm:inline">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

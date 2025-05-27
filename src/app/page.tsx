"use client"; // Required for Framer Motion and hooks

// Imports
import ProjectCard from "@/components/ProjectCard"; // Assuming ProjectCard is in this path
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Instagram,
  // X from lucide-react is no longer needed here if only used for the social icon
} from "lucide-react";
import { motion, useAnimation, HTMLMotionProps } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  useEffect,
  ReactNode,
  ElementType,
  useMemo,
  useState,
  useEffect as useEffectReact,
} from "react";

// Custom SVG component for the X platform logo
const XLogoIcon = ({ className = "" }: { className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className} // Pass className for styling (e.g., size, color)
    fill="currentColor"
  >
    <title>X</title>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const projectsData = [
  {
    title: "GTA VI Countdown",
    description:
      "Made a countdown website and integrated Gemini Flash 1.5 API to generate custom output in intel, Leonida Scoop and Weazel news",
    imageUrl: "/images/gta.jpg",
    projectUrl: "https://hottogether.vercel.app",
    githubUrl: "https://github.com/thevikashrajput/gta6-countdown",
    tags: ["JavaScript", "CSS", "AI"],
  },
  {
    title: "Dynamic Wedding Wish",
    description:
      "A wedding anniversary wish for a client. Included music, motion and gallery features",
    imageUrl: "/images/raya.jpg",
    projectUrl: "https://rrayaa.vercel.app",
    githubUrl: "https://github.com/thevikashrajput/raya",
    tags: ["TypeScript", "CSS", "JavaScript"],
  },
  {
    title: "Authentication System",
    description:
      "Tried to build a full stack Authentication system with mongoDB in NextJS (still learning)",
    imageUrl: "/images/auth.png",
    projectUrl: "https://auth-nextjs-black.vercel.app/login",
    githubUrl: "https://github.com/thevikashrajput/auth-nextjs",
    tags: ["TypeScript", "JavaScript", "CSS", "MongoDB"],
  },
  {
    title: "PirateHAX",
    description: "Create a web index using LLM just for hobby",
    imageUrl: "/images/piratehax.png",
    projectUrl: "https://pirate-hax.vercel.app/",
    githubUrl: "https://github.com/thevikashrajput/pirate-hax",
    tags: ["JavaScript", "HTML", "CSS"],
  },
];

// --- Animation Variants ---
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.2,
      delay: delay,
    },
  }),
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const heroTextVariant = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" },
  },
});

const buttonVariants = {
  initial: { scale: 1, boxShadow: "0px 5px 10px rgba(0,0,0,0.1)" },
  hover: {
    scale: 1.05,
    boxShadow: "0px 8px 15px rgba(var(--primary-rgb), 0.3)",
    transition: { duration: 0.3, ease: "circOut" },
  },
  tap: { scale: 0.95, transition: { duration: 0.2, ease: "circIn" } },
};

const skillTagVariants = {
  hover: {
    y: -4,
    backgroundColor: "rgba(var(--accent-rgb), 0.25)",
    transition: { duration: 0.2, ease: "easeOut" },
  },
  initial: {
    y: 0,
    backgroundColor: "rgba(var(--accent-rgb), 0.1)",
  },
};

// --- Typed Props for AnimatedSection ---
interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
  tag?: ElementType;
}

// Helper component for scroll-triggered animations
const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  id,
  delay = 0,
  threshold = 0.2,
  triggerOnce = true,
  tag = "section",
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce, threshold });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!triggerOnce) {
      controls.start("hidden");
    }
  }, [controls, inView, triggerOnce]);

  const MotionComponent = useMemo(() => {
    return motion(tag as any) as React.ComponentType<HTMLMotionProps<any>>;
  }, [tag]);

  return (
    <MotionComponent
      ref={ref}
      id={id}
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
      custom={delay}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};

// HeroHeading component
function HeroHeading() {
  const fullText = "Hi, I'm Vikash.";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffectReact(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        setIndex((prevIndex) => prevIndex + 1);
      }, 120);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <motion.h1
      className="
        text-center
        text-5xl sm:text-6xl md:text-7xl lg:text-8xl
        font-extrabold tracking-tight leading-tight mb-8
        bg-clip-text text-transparent
        bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500
        animate-gradient-x
        whitespace-pre
      "
    >
      {displayedText}
      <span className="blinking-cursor">|</span>
      <style jsx>{`
        .blinking-cursor {
          display: inline-block;
          animation: blink 1s step-end infinite;
          color: #f59e0b;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
        h1.whitespace-pre {
          min-height: 1.2em;
        }
      `}</style>
    </motion.h1>
  );
}

// HomePage component
export default function HomePage() {
  const handleSmoothScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const href = event.currentTarget.getAttribute("href");
    if (href && href.startsWith("#")) {
      event.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <div className="bg-background text-foreground space-y-32 sm:space-y-40 md:space-y-48 pb-20 overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        id="hero"
        className="min-h-[85vh] flex flex-col justify-center items-center text-center pt-20 px-4 sm:px-6 lg:px-8 relative isolate"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        custom={0.1}
      >
        <div className="absolute inset-0 -z-10 overflow-hidden opacity-70">
          <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl animate-pulse-slow opacity-60"></div>
          <div className="absolute -bottom-1/4 -right-1/4 w-3/4 h-3/4 bg-accent/10 rounded-full blur-3xl animate-pulse-slower opacity-50 animation-delay-2000"></div>
        </div>
        <div className="max-w-4xl">
          <HeroHeading />
          <motion.p
            variants={heroTextVariant(0.5)}
            className="text-xl sm:text-2xl text-foreground/80 mb-12 leading-loose"
          >
            I'm a{" "}
            <span className="text-accent font-semibold tracking-wide">
              Full-Stack Developer
            </span>{" "}
            crafting elegant, high-performance digital experiences from concept
            to launch.
          </motion.p>
          <motion.div
            variants={heroTextVariant(0.7)}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
          >
            <motion.a
              href="#works"
              onClick={handleSmoothScroll}
              className="bg-primary text-primary-foreground font-bold py-4 px-10 rounded-lg text-lg inline-flex items-center gap-2 shadow-xl group"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              View My Work{" "}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1.5 transition-transform duration-300 ease-out" />
            </motion.a>
            <motion.a
              href="/Vikash Kumar-FrontEnd.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-slate-900 text-slate-100 font-bold py-4 px-10 rounded-lg text-lg
                inline-flex items-center gap-2 border-2 border-purple-600/80
                shadow-[0_0_15px_-3px_rgba(168,85,247,0.5)] group transition-all duration-300 ease-in-out
                hover:bg-purple-600/10 hover:text-white hover:border-purple-500
                hover:shadow-[0_0_25px_-3px_rgba(168,85,247,0.7)]
              "
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              View Résumé{" "}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1.5 transition-transform duration-300 ease-out" />
            </motion.a>
            <motion.a
              href="#contact"
              onClick={handleSmoothScroll}
              className="bg-transparent border-2 border-accent text-accent font-semibold py-3.5 px-10 rounded-lg text-lg inline-flex items-center gap-2 shadow-lg group"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              Get In Touch{" "}
              <Mail className="h-5 w-5 group-hover:animate-shake-custom" />
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Works Section */}
      <AnimatedSection
        id="works"
        className="scroll-mt-32 px-4 sm:px-6 lg:px-8"
        threshold={0.15}
      >
        <div className="max-w-6xl mx-auto text-center mb-16 sm:mb-20">
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold mb-3 text-foreground relative inline-block"
          >
            Selected Works
          </motion.h2>
          <motion.span
            variants={{
              hidden: { scaleX: 0, opacity: 0 },
              visible: {
                scaleX: 1,
                opacity: 1,
                transition: { duration: 0.7, delay: 0.3, ease: "easeOut" },
              },
            }}
            className="block w-2/3 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto mt-3 rounded-full origin-center"
          />
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-foreground/75 max-w-2xl mx-auto mt-8"
          >
            Here's a glimpse into some of the projects I've passionately built.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {projectsData.map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection
        id="about"
        className="scroll-mt-32 px-4 sm:px-6 lg:px-8"
        threshold={0.25}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center sm:text-left mb-12 sm:mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-bold mb-4 text-foreground"
            >
              About Me
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-foreground/75 max-w-3xl mx-auto sm:mx-0"
            >
              A little more about my journey, skills, and what drives me.
            </motion.p>
          </div>
          <div className="grid md:grid-cols-5 gap-10 lg:gap-16 items-center">
            <motion.div variants={itemVariants} className="md:col-span-2">
              <motion.div
                className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl shadow-2xl flex items-center justify-center overflow-hidden group relative"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 10px 30px rgba(var(--primary-rgb), 0.15)",
                }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/images/photo.jpeg"
                  alt="Vikash Rajput"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/50 transition-colors duration-300 rounded-xl"></div>
              </motion.div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="md:col-span-3 text-lg text-foreground/80 space-y-6 leading-relaxed"
            >
              <p>
                Hello! I'm Vikash, a passionate and creative developer with a
                knack for building elegant and efficient solutions. My journey
                started with a fascination for how websites worked, evolved
                through countless hours of learning, and has now blossomed into
                a career I truly love.
              </p>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  My Toolkit:
                </h3>
                <div className="flex flex-wrap gap-x-3 gap-y-3">
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "ReactJs",
                    "NextJs",
                    "Tailwind CSS",
                    "TypeScript",
                    "ReactQuery",
                    "MongoDB",
                    "Prisma",
                    "AWS (Amplify, S3)",
                    "Material UI",
                    "Figma",
                    "Vite",
                    "Framer Motion",
                    "Git & Github",
                  ].map((skill) => (
                    <motion.span
                      key={skill}
                      className="font-medium text-accent bg-accent/10 px-3.5 py-1.5 rounded-lg text-sm cursor-default"
                      variants={skillTagVariants}
                      initial="initial"
                      whileHover="hover"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
              <p>
                Beyond the screen, I'm an avid cinephile, a sci-fi enthusiast,
                and a perpetual seeker of the perfect cup of gourmet coffee. I
                believe in continuous learning and am always excited to explore
                new technologies or collaborate on impactful projects. I aspire
                to become a polymath someday.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection
        id="contact"
        className="scroll-mt-32 text-center py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/10"
        threshold={0.2}
      >
        <div className="max-w-2xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold mb-6 text-foreground"
          >
            Let's Connect
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-foreground/75 mb-12 leading-relaxed"
          >
            Have a project in mind, a question, or just want to say hi? I'd love
            to hear from you.
          </motion.p>
          <motion.a
            href="mailto:thevikashrajput@hotmail.com"
            className="bg-accent text-accent-foreground font-bold py-4 px-12 rounded-lg text-lg inline-flex items-center gap-2.5 shadow-xl group"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            Say Hello{" "}
            <Mail className="h-5 w-5 group-hover:animate-bounce-custom" />
          </motion.a>
          <motion.div
            variants={itemVariants}
            className="mt-16 flex justify-center space-x-6 sm:space-x-8"
          >
            <motion.a
              href="https://github.com/thevikashrajput"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-all duration-300"
              aria-label="Github Profile"
              whileHover={{
                scale: 1.15,
                y: -2,
                color: "hsl(var(--primary-hsl))",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={32} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/thevikashrajput"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-all duration-300"
              aria-label="LinkedIn Profile"
              whileHover={{
                scale: 1.15,
                y: -2,
                color: "hsl(var(--primary-hsl))",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={32} />
            </motion.a>
            <motion.a
              href="https://instagram.com/thevikashrajput_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-all duration-300"
              aria-label="Instagram Profile"
              whileHover={{
                scale: 1.15,
                y: -2,
                color: "hsl(var(--primary-hsl))",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram size={32} />
            </motion.a>
            {/* X Platform Link with Custom SVG Icon */}
            <motion.a
              href="https://x.com/thevikashrajput" // Your X profile URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-all duration-300"
              aria-label="X Profile"
              whileHover={{
                scale: 1.15,
                y: -2,
                color: "hsl(var(--primary-hsl))",
              }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Using the custom XLogoIcon component with Tailwind size classes */}
              <XLogoIcon className="w-8 h-8" /> {/* Corresponds to size={32} */}
            </motion.a>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}

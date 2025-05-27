import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl?: string;
  githubUrl?: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  projectUrl,
  githubUrl,
  tags,
}) => {
  return (
    <div className="bg-card rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl group border border-foreground/10">
      <div className="relative h-52 sm:h-64 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-card-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-accent/10 text-accent text-xs font-medium px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-sm text-card-foreground/80 mb-4 line-clamp-3">
          {description}
        </p>
        <div className="flex items-center space-x-4">
          {projectUrl && (
            <Link
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-accent hover:text-primary font-medium space-x-1 transition-colors"
            >
              <ExternalLink size={16} />
              <span>Live</span>
            </Link>
          )}
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-accent hover:text-primary font-medium space-x-1 transition-colors"
            >
              <Github size={16} />
              <span>Code</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

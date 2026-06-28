// src/components/sections/RepositoryCard.tsx
import { Repository } from "@/types/repository";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Star, ExternalLink } from "lucide-react";

export function RepositoryCard({ repository }: { repository: Repository }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      {repository.thumbnail && (
        <img
          src={repository.thumbnail}
          alt={repository.title}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold">{repository.title}</h3>
          {repository.stars && (
            <div className="flex items-center gap-1 text-muted-foreground">
              <Star className="w-4 h-4" />
              <span className="text-sm">{repository.stars}</span>
            </div>
          )}
        </div>

        <p className="text-muted-foreground mb-4">{repository.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {repository.techStack.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3">
          {repository.githubUrl && (
            <a
              href={repository.githubUrl}
              className="text-sm flex items-center gap-1 hover:underline"
            >
              GitHub <ExternalLink className="w-3 h-3" />
            </a>
          )}
          {repository.demoUrl && (
            <a
              href={repository.demoUrl}
              className="text-sm flex items-center gap-1 hover:underline"
            >
              دمو <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
